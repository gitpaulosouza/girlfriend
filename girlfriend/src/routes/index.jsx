import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from "../containers/form/form";
import FinalPage from "../containers/finalPage/finalPage";
import LoveMe from "../containers/loveMe/loveMe";
import Letter from "../containers/Letter/letter";

export const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/gift" element={<LoveMe />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/final-page" element={<FinalPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
