import { render, screen } from "@testing-library/react";
import Contact from "../../pages/Contact";
import "@testing-library/jest-dom";

test("should contain heading", ()=>{
    render(<Contact/>);

    const heading=screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})