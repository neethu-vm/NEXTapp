
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StudentList from "./StudentList";
import TeacherList from "./TeacherList";
function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to the Student Teacher Management APP</h2>
      <Tabs>
        <TabList>
          <Tab> <b>Students </b></Tab>
          <Tab> <b>Teachers</b></Tab>
        </TabList>

        <TabPanel>
      
         

          <StudentList/>
    
        </TabPanel>

        <TabPanel>

   
    <TeacherList/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Dashboard;
