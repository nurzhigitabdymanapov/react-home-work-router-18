import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Courses } from "../pages/courses/Courses";
import { Anouncements } from "../pages/Anouncements";
import { Schedule } from "../pages/Schedule";
import { Students } from "../pages/courses/students/Students";
import { Ratings } from "../pages/courses/Ratings";
import { Notifications } from "../pages/Notifications";
import { Materials } from "../pages/courses/materials/Materials";
import { StudentDetails } from "../pages/courses/students/StudentDetails";
import { MaterialsDetails } from "../pages/courses/materials/MaterialsDetails";
import { Submited } from "../pages/courses/materials/Submited";
import { Waiting } from "../pages/courses/materials/Waiting";
import { Late } from "../pages/courses/materials/Late";

const LayoutPage = lazy(() => import("../components/LayoutPage"));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
      path="/"
        element={
          <Suspense fallback={"Loading"}>
            <LayoutPage />
          </Suspense>
        }>
        <Route path="courses" element={<Courses />}>
          <Route path="materials" element={<Materials />} />
          <Route path="students" element={<Students />} />
          <Route path="students/:id/details" element={<StudentDetails />} />
          <Route path="ratings" element={<Ratings />} />
          <Route path="materials/:id/details" element={<MaterialsDetails />}>
            <Route path="submited" element={<Submited />} />
            <Route path="waiting" element={<Waiting />} />
            <Route path="late" element={<Late />} />
          </Route>
        </Route>

        <Route path="anouncements" element={<Anouncements />} />
        <Route path="notification" element={<Notifications />} />
        <Route path="schedule" element={<Schedule />} />
      </Route>
    </Routes>
  );
};
