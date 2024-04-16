import React, { useState } from 'react';
import {
  ButtonContainer,
  ButtonsWrapper,
} from '@/components/commons/buttons/Button.style';
import Search from '@/components/search/Search';
import Button, { TabButton } from '@/components/commons/buttons/Button';
import MainCard from '@/components/commons/mainItem/MainCard';
import Maintitle from '@/components/commons/mainItem/MainTitle';
import ListTitle from '@/components/commons/mainItem/ListTitle';
import MainList from '@/components/commons/mainItem/MainList';
import ReDesignHeader from '@/components/layouts/Header2';
import SearchModal from './SearchPage';
import { useNavigate } from 'react-router-dom';
// import SearchModal from '@/components/SearchModal';

interface MainProps {
  onClick?: () => void;
}

const Main: React.FC<MainProps> = () => {
  const navigate = useNavigate();

  const [isSearchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  // 모달을 토글하는 함수
  const toggleSearchModal = () => setSearchModalOpen(!isSearchModalOpen);

  // 모달을 여는 함수
  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  // 모달을 닫는 함수
  const closeSearchModal = () => {
    setSearchModalOpen(false);
  };

  const handleMakePlanClick = () => {
    navigate('/planList');
  };

  const handleReviewPageClick = () => {
    navigate('/travelReview');
  };

  // 메인 헤더 카드 임시 데이터
  const MainCardsData = [
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥', '#데이트', '#가족여행', '#역사', '#역사'],
      imageUrl: '/assets/kyeongju_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥', '#데이트'],
      imageUrl: '/assets/kyeongju_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥'],
      imageUrl: '/assets/kyeongju_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥'],
      imageUrl: '/assets/kyeongju_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥', '#데이트', '#가족여행', '#역사', '#역사'],
      imageUrl: '/assets/jejudo_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥'],
      imageUrl: '/assets/jejudo_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥'],
      imageUrl: '/assets/jejudo_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      title: '향기로운 봄날의 한옥 체험',
      categories: ['#한옥'],
      imageUrl: '/assets/jejudo_720.jpg',
      location: '경상도',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
  ];

  // 메인 TOP 10 리스트 임시 데이터
  // const tempData: ListItemProps[] = [...Array(10)].map((_, index) => ({
  //   title: `${index + 1} 서울`,
  //   location: '서울 > 남산타워( N서울타워)',
  //   description: '멋진 도시 전망을 볼 수 있는 곳',
  //   likes: 77,
  //   imageUrl: '/assets/namsantower_720.jpg',
  // }));

  const items = [
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
    {
      rank: '1',
      title: '즐거웠던 여행',
      location: '서울',
      categories: ['#한옥', '#데이트'],
      description: '멋진 도시 전망을 볼 수 있는 곳',
      imageUrl: '/assets/namsantower_720.jpg',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
    },
  ];

  return (
    <>
      <ReDesignHeader />
      <Search
        placeholder="검색어를 입력해주세요."
        onIconClick={toggleSearchModal}
      />
      <ButtonContainer>
        {/* 버튼 이벤트 핸들러 로직 */}
        {/* ... */}
      </ButtonContainer>
      <Maintitle />
      <ButtonsWrapper>
        <Button text="가족 여행" />
        <Button text="커플 여행" />
      </ButtonsWrapper>
      <MainCard cards={MainCardsData} />
      <ListTitle />
      <MainList items={items} />
      <SearchModal isOpen={isSearchModalOpen} onClose={toggleSearchModal} />
    </>
  );
};

export default Main;
