import * as React from "react";
class TimeTable extends React.Component {
    render() {
        return (
            <table border={2}>
                <thead>
                    <tr>
                        {/* <td> */}
                        <th>Subject</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        {/* </td> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Maths</td>
                        <td>8:00 AM - 9:00 AM</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default TimeTable;