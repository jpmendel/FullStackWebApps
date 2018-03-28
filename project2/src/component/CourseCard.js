import React from "react";
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button,
        Input, InputGroup, InputGroupAddon, Tooltip} from "reactstrap";
import CopyToClipboard from "react-copy-to-clipboard";
import ContentCopyIcon from "material-ui-icons/ContentCopy";
import DoneIcon from "material-ui-icons/Done";

class CourseCard extends React.Component {
  constructor(props) {
    super(props);
    this.onCopyCRN = this.onCopyCRN.bind(this);
    this.onTooltipOpen = this.onTooltipOpen.bind(this);
    this.onViewDetail = this.onViewDetail.bind(this);
    this.state = {
      copiedCRN: false,
      tooltipOpen: false
    };
  }

  componentWillReceiveProps(newProps) {
    if (this.state.copiedCRN) {
      if (newProps.lastCopiedCRN !== "C" + this.props.course.CRN) {
        this.setState({ copiedCRN: false });
      }
    }
  }

  parseRooms() {
    let rooms = [];
    let room = "";
    let counter = 0;
    while (counter < this.props.course.Room.length) {
      room += this.props.course.Room.charAt(counter);
      if (room.length >= 8) {
        rooms.push(room);
        room = "";
        counter++;
      }
      counter++;
    }
    return rooms;
  }

  parseMeetingTimes() {
    let meetingTimes = [];
    let meetingTime = "";
    let counter = 0;
    while (counter < this.props.course["Meeting Time"].length) {
      meetingTime += this.props.course["Meeting Time"].charAt(counter);
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
    const meetingTimes = this.parseMeetingTimes();
    const rooms = this.parseRooms();
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

  onCopyCRN() {
    this.setState({ copiedCRN: true });
    this.props.onCopyCRN("C" + this.props.course.CRN);
  }

  onTooltipOpen() {
    this.setState({ tooltipOpen: !this.state.tooltipOpen });
  }

  onViewDetail() {
    this.props.onViewDetail(this.props.course);
  }

  render() {
    const course = this.props.course;
    const meetingTimesWithRooms = this.findMeetingTimesWithRooms();
    const copyIcon = this.state.copiedCRN ? <DoneIcon/> : <ContentCopyIcon/>;
    const tooltipText = this.state.copiedCRN ? "Copied!" : "Copy CRN";
    return (
      <div className="course_card-main">
        <Card>
          <CardBody className="text-center">
            <CardTitle>{course.Department + " " + course.CrseNum}</CardTitle>
            <CardSubtitle>{course.Title}</CardSubtitle>
            <CardText>{"Section " + course.Section}</CardText>
            <InputGroup className="course_card-input_group" size="sm">
              <Input className="course_card-input text-center" value={course.CRN} readOnly/>
              <InputGroupAddon addonType="append">
                <CopyToClipboard id={"C" + course.CRN} text={course.CRN} onCopy={this.onCopyCRN}>
                  <Button className="pt-2" color="primary">{copyIcon}</Button>
                </CopyToClipboard>
                <Tooltip
                  placement="top" isOpen={this.state.tooltipOpen}
                  target={"C" + course.CRN} toggle={this.onTooltipOpen}>
                  {tooltipText}
                </Tooltip>
              </InputGroupAddon>
            </InputGroup>
            <br/>
            <CardText>{course.Instructor}</CardText>
            {meetingTimesWithRooms}
            <Button
              className="course_card-view_details_button w-50"
              onClick={this.onViewDetail}>
              View Details
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CourseCard;
