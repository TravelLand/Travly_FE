import React from 'react';
import styled from 'styled-components';
import { FaRegBookmark } from 'react-icons/fa6';
import CategoryButton from '../buttons/CategoryButton'; // CategoryButton을 임포트합니다.

interface ListItemProps {
  rank: string;
  title: string;
  location: string;
  description: string;
  categories: string[];
  imageUrl: string;
  startDate: string;
  endDate: string;
}

interface MainListProps {
  items: ListItemProps[];
}

const MainList: React.FC<MainListProps> = ({ items = [] }) => {
  return (
    <MainListContainer>
      {items.map((item, index) => (
        <ItemContainer key={index}>
          <ImageSection>
            <BookmarkIcon /> {/* 북마크 아이콘을 추가합니다. */}
            <Image src={item.imageUrl} alt="이미지" />
          </ImageSection>
          <TextSection>
            <Rank>{index + 1}</Rank>
            <Title>
              {item.location} | {item.startDate} - {item.endDate}
            </Title>
            <MainTitle>{item.title}</MainTitle>
            <Content>{item.description}</Content>
            <CategoriesContainer>
              {/* 아이템의 카테고리들을 출력합니다. */}
              {item.categories.map((category, categoryIndex) => (
                <CategoryButton key={categoryIndex} title={category} />
              ))}
            </CategoriesContainer>
          </TextSection>
        </ItemContainer>
      ))}
    </MainListContainer>
  );
};

export default MainList;

const MainListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  width: 1100px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const BookmarkIcon = styled(FaRegBookmark)`
  position: absolute;
  top: 40px;
  right: 10px;
  font-size: 24px;
  color: #666;
`;

const Rank = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #fff;
  padding: 5px 10px;
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
`;

const ItemContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 250px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const ImageSection = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 5px; */
`;

const TextSection = styled.div`
  flex: 3;
  position: relative;
  padding: 20px;
`;

const Title = styled.div`
  margin-top: 70px;
  color: #333;
  font-size: 14px;
  font-weight: 600;
`;

const MainTitle = styled.div`
  margin-top: 10px;
  color: #000;
  font-size: 22px;
  font-weight: 600;
`;

const Content = styled.div`
  margin: 10px 0 10px;
  color: #000;
  font-size: 17px;
`;

const Image = styled.img`
  width: 260px;
  height: 240px;
  border-radius: 10px;
  /* margin-left: 5px; */
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  /* align-items: center; */
  margin-top: 3px;
  gap: 4px;
  height: 100px;
  overflow: hidden;
`;
