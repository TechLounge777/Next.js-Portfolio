import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 148px;
  padding-right: 148px;
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 158px;
`;

export const HeroTitle = styled.div`
  max-width: 506px;
  font-size: 44px;
  line-height: 60px;
  color: #21243d;
  margin-bottom: 40px;
`;

export const HeroDescription = styled.div`
  max-width: 497px;
  font-size: 16px;
  line-height: 23px;
  color: #21243d;
  margin-bottom: 38px;
`;

export const HeroCtaButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 208px;
  padding: 13px 20px 13px 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  background: #ff6464;
  color: #fff;
  border-radius: 2px;
  margin-bottom: 71px;
  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

export const RightSection = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #edf7fa;
  max-width: 243px;
  height: 243px;
  border-radius: 50%;
`;

export const StyledImage = styled.img`
  display: flex;
  margin-right: -5px;
  margin-top: -13px;
`;
