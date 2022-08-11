import { getByAltText, render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe("<Home/> ", () => {
  it("must display the StarWars logo in header", () => {
    render(<Home />);
    expect(screen.getByAltText("gif starwars").src).toContain("https://thumbs.gfycat.com/UnfinishedWaryFurseal-size_restricted.gif");
  });

  it("Render text 'Follow starWas'", () => {
    render(<Home />);
    expect(screen.getByText(/Follow star wars:/i));
  })

  it("Render social links", () => {
    render(<Home />);
    expect(screen.getAllByRole("link").length).toBe(4);
  })
});

