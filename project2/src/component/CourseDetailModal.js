import React from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
import CopyToClipboard from "react-copy-to-clipboard";

import Constants from "../data/Constants.js";

class CourseDetailModal extends React.Component {
  constructor(props) {
    super(props);
    this.onCopyCRN = this.onCopyCRN.bind(this);
    this.onToggleModal = this.onToggleModal.bind(this);
    this.onOpenCourseDescription = this.onOpenCourseDescription.bind(this);
    this.state = {
      copiedCRN: false
    };
  }

  getCourseDescriptionLink(courseDescTag) {
    const href = courseDescTag.match("href=\".*\"");
    if (href.length > 0) {
      const descLink = href[0].slice(6, -1).replace(/amp;/g, "");
      return Constants.BUCKNELL_COURSE_INFO_URL + descLink;
    }
    return "";
  }

  onCopyCRN() {
    this.setState({ copiedCRN: true });
  }

  onToggleModal() {
    this.setState({ copiedCRN: false });
    this.props.toggle();
  }

  onOpenCourseDescription() {
    window.open(this.getCourseDescriptionLink(this.props.course.CrseDesc), "_blank");
  }

  render() {
    if (this.props.course) {
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
          <Modal isOpen={this.props.isOpen} toggle={this.onToggleModal}>
            <ModalHeader toggle={this.onToggleModal}>{this.props.course.Course}</ModalHeader>
            <ModalBody>
              <b>CRN:</b> {this.props.course.CRN}<br/>
              <b>Title:</b> {this.props.course.Title}<br/>
              <b>Instructor:</b> {this.props.course.Instructor}<br/><br/>
              <b>Meeting Times:</b><br/>
              {this.props.meetingTimesWithRooms}
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
                <Button className="ml-2" color="secondary" onClick={this.onToggleModal}>Close</Button>
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
