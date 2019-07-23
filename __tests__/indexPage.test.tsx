import { renderWithRedux } from '../utils';
import IndexPage from '../pages/index';

describe('Page Index', () => {
  it('render index', () => {
    const { getByTestId } = renderWithRedux(<IndexPage />);
    const Title = getByTestId('index-title');
    expect(Title).toBeTruthy();
    expect(Title).toHaveStyle('color: indianred');
  })
})