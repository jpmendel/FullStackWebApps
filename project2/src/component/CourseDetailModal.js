import React from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
import CopyToClipboard from "react-copy-to-clipboard";

class CourseDetailModal extends React.Component {
  constructor(props) {
    super(props);
    this.onCopyCRN = this.onCopyCRN.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onOpenCourseDescription = this.onOpenCourseDescription.bind(this);
    this.state = {
      copiedCRN: false
    };
  }

  parseRooms(courseRoom) {
    let rooms = [];
    let room = "";
    let counter = 0;
    while (counter < courseRoom.length) {
      room += courseRoom.charAt(counter);
      if (room.length >= 8) {
        rooms.push(room);
        room = "";
        counter++;
      }
      counter++;
    }
    return rooms;
  }

  parseMeetingTimes(courseMeetingTime) {
    let meetingTimes = [];
    let meetingTime = "";
    let counter = 0;
    while (counter < courseMeetingTime.length) {
      meetingTime += courseMeetingTime.charAt(counter);
      const lastTwo = meetingTime.slice(-2);
      if (lastTwo === "am" || lastTwo === "pm") {
        meetingTimes.push(meetingTime);
        meetingTime = "";
        counter++;
      }
      counter++;
    }
    return meetingTimes;
  }

  findMeetingTimesWithRooms() {
    const meetingTimes = this.parseMeetingTimes(this.props.course["Meeting Time"] || "");
    const rooms = this.parseRooms(this.props.course.Room || "");
    const meetingTimesWithRooms = [];
    for (let i = 0; i < meetingTimes.length; i++) {
      let room = "";
      if (rooms.length === 0) {
        room = "";
      } else if (rooms.length <= i) {
        room = " - " + rooms[rooms.length - 1]
      } else {
        room = " - " + rooms[i];
      }
      meetingTimesWithRooms.push(<div key={i}>{meetingTimes[i] + room}</div>);
    }
    if (meetingTimesWithRooms.length === 0) {
      meetingTimesWithRooms.push(<div key={0}>TBA</div>);
    }
    meetingTimesWithRooms.push(<br key={-1}/>);
    return meetingTimesWithRooms;
  }

  getCourseDescriptionLink(courseDescTag) {
    const href = courseDescTag.match("href=\".*\"");
    if (href.length > 0) {
      const descLink = href[0].slice(6, -1).replace(/amp;/g, "");
      console.log(descLink);
      return "https://www.bannerssb.bucknell.edu" + descLink;
    }
    return "";
  }

  onCopyCRN() {
    this.setState({ copiedCRN: true });
  }

  onCloseModal() {
    this.setState({ copiedCRN: false });
    this.props.toggle();
  }

  onOpenCourseDescription() {
    window.open(this.getCourseDescriptionLink(this.props.course.CrseDesc), "_blank");
  }

  render() {
    if (this.props.course) {
      let meetingTimesWithRooms = this.findMeetingTimesWithRooms();
      let cccRequirements = "";
      if (this.props.course.CCCReq) {
        for (let i = 0; i < this.props.course.CCCReq.length; i++) {
          cccRequirements += this.props.course.CCCReq[i];
          if (i < this.props.course.CCCReq.length - 1) {
            cccRequirements += ", ";
          }
        }
      }
      const copyText = this.state.copiedCRN ? "Copied!" : "Copy CRN";
      return (
        <div>
          <Modal isOpen={this.props.isOpen} toggle={this.onCloseModal}>
            <ModalHeader toggle={this.onCloseModal}>{this.props.course.Course}</ModalHeader>
            <ModalBody>
              <b>CRN:</b> {this.props.course.CRN}<br/>
              <b>Title:</b> {this.props.course.Title}<br/>
              <b>Instructor:</b> {this.props.course.Instructor}<br/><br/>
              <b>Meeting Times:</b>
              {meetingTimesWithRooms}
              <b>Available Seats:</b> {this.props.course.SeatsAvail || 0}<br/>
              <b>Waitlist:</b> {this.props.course.WaitList || 0}<br/>
              <b>Reserved Seats:</b> {this.props.course.ResSeats || 0}<br/><br/>
              <b>CCC Requirements:</b> {cccRequirements}<br/>
              <b>Needs Permission:</b> {this.props.course.Prm ? "Yes" : "No"}
            </ModalBody>
            <ModalFooter>
              <div className="text-left w-50">
                <Button color="info" onClick={this.onOpenCourseDescription}>Course Desc</Button>
              </div>
              <div className="text-right w-50">
                <CopyToClipboard text={this.props.course.CRN} onCopy={this.onCopyCRN}>
                  <Button color="primary">{copyText}</Button>
                </CopyToClipboard>
                <Button className="ml-2" color="secondary" onClick={this.onCloseModal}>Close</Button>
              </div>
            </ModalFooter>
          </Modal>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default CourseDetailModal;
