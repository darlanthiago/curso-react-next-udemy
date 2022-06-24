import { render, screen } from '@testing-library/react';
import { Posts } from '.';
import { posts } from './mock';

describe('</Posts >', () => {
  it('should render posts', () => {
    const postsLength = posts.length;
    render(<Posts posts={posts} />);

    expect(
      screen.getAllByRole('heading', {
        name: /Title/i,
        level: 2,
      }),
    ).toHaveLength(postsLength);

    expect(
      screen.getAllByRole('img', {
        name: /Title/i,
      }),
    ).toHaveLength(postsLength);

    expect(screen.getAllByText(/Body-/i)).toHaveLength(postsLength);

    const postToTest = posts[2];

    expect(
      screen.getByRole('img', {
        name: `${postToTest.title}`,
      }),
    ).toHaveAttribute('src', postToTest.cover);
  });

  it('should not have posts', () => {
    render(<Posts />);
    expect(
      screen.queryByRole('heading', {
        name: /Title/i,
        level: 2,
      }),
    ).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts posts={posts} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
