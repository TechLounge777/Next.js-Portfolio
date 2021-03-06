import styled from "styled-components";

export const BlogPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 106px;
`;
export const PostsList = styled.div`
  max-width: 682px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
`;
export const BlogHeader = styled.h1`
  color: #21243d;
  font-size: 44px;
  line-height: 60px;
  font-weight: 700;
  margin-bottom: 55px;
`;

export const BlogPost = styled.div``;

export const PostTitle = styled.h2`
  color: #21243d;
  font-size: 30px;
  line-height: 44px;
  font-weight: 500;
  &:first-letter {
    text-transform: uppercase;
  }
  &:hover {
    color: #00a8cc;
  }
`;
export const PostData = styled.div`
  margin-top: 2px;
  margin-bottom: 6px;
  display: flex;
`;

export const PostDate = styled.h3`
  font-size: 20px;
  line-height: 29px;
  font-weight: 400;
  color: #21243d;
  margin-right: 20px;
`;

export const Break = styled.h3`
  font-size: 20px;
  line-height: 29px;
  font-weight: 400;
  color: #21243d;
  margin-right: 20px;
`;

export const PostCategory = styled.h3`
  font-size: 20px;
  line-height: 29px;
  font-weight: 400;
  color: #8695a4;
`;

export const PostText = styled.p`
  font-size: 16px;
  line-height: 23px;
  font-weight: 400;
  color: #21243d;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const PostLineBreak = styled.hr`
  border: 1px solid #e0e0e0;
  max-width: 681px;
  margin-top: 29px;
  margin-bottom: 32px;
`;
