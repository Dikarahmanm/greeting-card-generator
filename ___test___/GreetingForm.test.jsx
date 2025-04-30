import { render, screen } from "@testing-library/react";
import CardPreview from "../src/components/CardPreview";
import { test, expect } from "vitest";


    test("renders card preview with props", () => {
    const dummyImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...";
    render(
        <CardPreview
        image={dummyImage}
        dear="Jane"
        message="Happy Birthday"
        from="John"
        />
    );

    expect(screen.getByText("Jane")).toBeInTheDocument();
    expect(screen.getByText("Happy Birthday")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();
    });
