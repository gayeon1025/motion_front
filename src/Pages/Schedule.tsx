import React, { FC, ReactNode } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/schedule.css'
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

const Schedule: FC = () => {
    return (
        <div className={"fullWidth"}>
            <Header />
            {ScheduleHeader}
            {ScheduleContents}
            {/*<MyCalendar/>*/}
            <Footer />
        </div>
    );
};

const ScheduleHeader: ReactNode = (
    <div className={"fullWidth scheduleHeaderDiv"}>
        <div className={"calendarTextDiv"}>
            <div className={"scheduleHeaderTitle robotoFont"}> Schedule </div>
            <div className={"scheduleHeaderSubTitle notoSansFont"}> 일정 </div>
        </div>
    </div>
);

const ScheduleCalendar: ReactNode = (
    <Calendar
        height="500px"

        calendars={[
            {
                id: '0',
                name: 'Private',
                bgColor: '#9e5fff',
                borderColor: '#9e5fff'
            },
            {
                id: '1',
                name: 'Company',
                bgColor: '#00a9ff',
                borderColor: '#00a9ff'
            }
        ]}
        disableDblClick={true}
        disableClick={false}
        isReadOnly={false}
        month={{
            startDayOfWeek: 0
        }}
        schedules={[]}
        scheduleView
        taskView
        template={{
            milestone(schedule) {
                return `<span style="color:#fff;background-color: ${schedule.bgColor};">${
                    schedule.title
                    }</span>`;
            },
            milestoneTitle() {
                return 'Milestone';
            },
            allday(schedule) {
                return `${schedule.title}<i class="fa fa-refresh"></i>`;
            },
            alldayTitle() {
                return 'All Day';
            }
        }}
        timezones={[
            {
                timezoneOffset: 540,
                displayLabel: 'GMT+09:00',
                tooltip: 'Seoul'
            },
            {
                timezoneOffset: -420,
                displayLabel: 'GMT-08:00',
                tooltip: 'Los Angeles'
            }
        ]}
        useDetailPopup
        useCreationPopup
        view={'month'} // You can also set the `defaultView` option.
        week={{
            showTimezoneCollapseButton: true,
            timezonesCollapsed: true
        }}
    />
);

const ScheduleContents: ReactNode = (
    <div className={"fullWidth scheduleContentsDiv"}>
        <div className={"scheduleContentTitle"}>일정</div>
        <div className={"scheduleContentComment notoSansFont"}>구체적인 사항은 임원진에게 문의해 주세요 :-)</div>
        <div className={"calendarDiv"}>
            {ScheduleCalendar}
        </div>
    </div>
);

export default Schedule;