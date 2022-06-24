import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCard } from './mock';

describe('<PostCard />', () => {
  it('should render', () => {
    render(<PostCard {...postCard} />);
    expect(screen.getByRole('img', { name: postCard.title })).toHaveAttribute('src', postCard.cover);

    expect(
      screen.getByRole('heading', {
        name: `${postCard.title} ${postCard.id}`,
        level: 2,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(postCard.body)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...postCard} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
