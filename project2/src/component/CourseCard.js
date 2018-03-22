import React from "react";
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";

class CourseCard extends React.Component {
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
      let lastTwo = meetingTime.slice(-2);
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
    let meetingTimes = this.parseMeetingTimes();
    let rooms = this.parseRooms();
    let meetingTimesWithRooms = [];
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

  render() {
    let meetingTimesWithRooms = this.findMeetingTimesWithRooms();
    return (
      <div className="course_card-main">
        <Card>
          <CardBody className="text-center">
            <CardTitle>{this.props.course.Department + " " + this.props.course.CrseNum}</CardTitle>
            <CardSubtitle>{this.props.course.Title}</CardSubtitle>
            <CardText>{"Section " + this.props.course.Section}</CardText>
            <CardText>{this.props.course.Instructor}</CardText>
            {meetingTimesWithRooms}
            <Button className="course_card-more_info_button w-50">More Info</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CourseCard;
