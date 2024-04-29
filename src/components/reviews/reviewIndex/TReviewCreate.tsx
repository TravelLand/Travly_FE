import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import { ModernInput } from '@/components/commons/inputs/Input';
import styled from 'styled-components';
import {
  DateFieldsContainer,
  FieldContainer,
  Input,
  Label,
} from '@/pages/travelReview/TravelReview.styles';

const ReviewCreate = () => {
  const navigate = useNavigate();
  const savedState = JSON.parse(localStorage.getItem('reviewState') || '{}');

  // 상태 관리 변수들
  const [title, setTitle] = useState<string>(savedState.title || '');
  const [isPublic, setIsPublic] = useState<boolean>(
    savedState.isPublic ?? true,
  );
  const [cost, setCost] = useState<string>(savedState.cost?.toString() || '');
  const [address, setAddress] = useState<string>(savedState.address || '');
  const [tripStartDate, setTripStartDate] = useState<string>(
    savedState.tripStartDate || '',
  );
  const [tripEndDate, setTripEndDate] = useState<string>(
    savedState.tripEndDate || '',
  );
  const [placeName, setPlaceName] = useState<string>(
    savedState.placeName || '',
  );
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState<boolean>(false);

  useEffect(() => {
    // 상태가 바뀔 때마다 업데이트 X / 다음 버튼 클릭 시에만 업데이트됨
    const tripData = {
      title,
      isPublic,
      address,
      placeName,
      cost,
      tripStartDate,
      tripEndDate,
    };
    localStorage.setItem('reviewState', JSON.stringify(tripData));
  }, [title, isPublic, address, placeName, cost, tripStartDate, tripEndDate]);

  // 각 입력 필드의 변화를 다루는 함수들
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const toggleIsPublic = () => {
    setIsPublic((prev) => !prev);
  };
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handlePlaceNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceName(e.target.value);
  };
  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 숫자가 아닌 모든 문자를 제거합니다.
    const value = e.target.value.replace(/\D/g, '');
    // 숫자만 있는 문자열을 콤마를 포함한 포맷으로 변환합니다.
    const formattedValue = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    // 유효한 숫자가 입력되었거나 입력 필드가 비워진 경우에만 상태를 업데이트합니다.
    if (!isNaN(parseFloat(value)) || value === '') {
      setCost(formattedValue);
    }
  };
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripStartDate(e.target.value);
  };
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripEndDate(e.target.value);
  };

  // '여행 플랜 불러오기' 버튼 클릭 처리
  const handleBringPlanClick = () => {
    alert('여행 플랜 불러오기 기능은 아직 개발 중입니다!');
  };

  // '다음' 버튼 클릭을 처리
  const handleNextClick = () => {
    setHasAttemptedSubmit(true);
    // 필수 입력 사항 확인
    if (
      title === '' ||
      address === '' ||
      placeName === '' ||
      tripStartDate === '' ||
      tripEndDate === ''
    ) {
      alert('모든 필수 입력 사항을 작성해주세요!');
      return; // 다음 단계로 넘어가지 않음
    }
    // 입력된 데이터를 객체로 생성하여 2단계 페이지로 넘김!
    const tripData = {
      title,
      isPublic,
      address,
      placeName,
      cost: parseFloat(cost),
      tripStartDate,
      tripEndDate,
      // 2단계에서 입력받을 나머지 데이터들 일단 빈값으로 둠!
      content: '',
      hashTag: [],
    };
    localStorage.setItem('reviewState', JSON.stringify(tripData));
    navigate('/reviewCreate/2', { state: tripData });
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '100%' }}>
          <div>
            <Title>
              <TitleWithCircle>제목</TitleWithCircle>
            </Title>
            <ReviewBoxWithSpaceBetween>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="/assets/icons/Rectangle.png"
                  style={{ height: '40px' }}
                />
                <ModernInput
                  type="text"
                  placeholder="제목을 입력해주세요"
                  width={400}
                  height={35}
                  border="transparent"
                  onChange={handleTitleChange}
                  fontSize={16}
                  fontWeight={'bold'}
                  value={title}
                />
                {hasAttemptedSubmit && title === '' && (
                  <ErrorMessage>제목을 입력해주세요</ErrorMessage>
                )}
              </div>

              <div>
                <ToggleButton isChecked={isPublic} onToggle={toggleIsPublic} />
              </div>
            </ReviewBoxWithSpaceBetween>
          </div>
          <div>
            <div>
              <BringPlanBtn onClick={handleBringPlanClick}>
                {' '}
                + 여행 플랜 불러오기
              </BringPlanBtn>
              {/* 지역 입력 */}
              <ReviewBox>
                <ReviewContent>
                  <div>
                    <TitleWithCircle>지역</TitleWithCircle>
                  </div>
                  {/* 지역 입력 여부 확인 */}
                  {hasAttemptedSubmit && address === '' && (
                    <ErrorMessage>지역을 입력해주세요</ErrorMessage>
                  )}
                  <ModernInput
                    type="text"
                    placeholder="지역을 입력해주세요 (예: 서울시 강남구 역삼동)"
                    width={400}
                    height={30}
                    border="transparent"
                    fontSize={16}
                    onChange={handleAddressChange}
                    value={address}
                  />
                </ReviewContent>
              </ReviewBox>
              <hr />
              {/* 위치 입력 */}
              <ReviewBox>
                <ReviewContent>
                  <div>
                    <TitleWithCircle>위치</TitleWithCircle>
                  </div>
                  {/* 위치 입력 여부 확인 */}
                  {hasAttemptedSubmit && placeName === '' && (
                    <ErrorMessage>위치를 입력해주세요</ErrorMessage>
                  )}
                  <ModernInput
                    type="text"
                    placeholder="위치를 입력해주세요 (예: 메가박스, CGV)"
                    width={400}
                    height={30}
                    border="transparent"
                    fontSize={16}
                    onChange={handlePlaceNameChange}
                    value={placeName}
                  />
                </ReviewContent>
              </ReviewBox>
              <hr />
              {/* 예산 입력 */}
              <ReviewBox>
                <ReviewContent>
                  <div>
                    <TitleWithCircle>예산</TitleWithCircle>
                  </div>
                  {/* 예산 입력 여부 확인 */}
                  {hasAttemptedSubmit && cost === '' && (
                    <ErrorMessage>예산을 입력해주세요</ErrorMessage>
                  )}
                  <ModernInput
                    type="text"
                    placeholder="예산을 입력해주세요"
                    width={400}
                    height={30}
                    border="transparent"
                    fontSize={16}
                    onChange={handleCostChange}
                    value={cost}
                  />
                </ReviewContent>
              </ReviewBox>
              <hr />
              {/* 여행 날짜 입력 */}
              <ReviewBox>
                <DateFieldsContainer>
                  <FieldContainer>
                    <Label>
                      <TitleWithCircle>여행 시작일</TitleWithCircle>
                    </Label>
                    {/* 여행 시작일 입력 여부 확인 */}
                    {hasAttemptedSubmit && tripStartDate === '' && (
                      <ErrorMessage>여행 시작일을 입력해주세요</ErrorMessage>
                    )}
                    <Input
                      type="date"
                      value={tripStartDate}
                      onChange={handleStartDateChange}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>
                      <TitleWithCircle>여행 종료일</TitleWithCircle>
                    </Label>
                    {/* 여행 종료일 입력 여부 확인 */}
                    {hasAttemptedSubmit && tripEndDate === '' && (
                      <ErrorMessage>여행 종료일을 입력해주세요</ErrorMessage>
                    )}
                    <Input
                      type="date"
                      value={tripEndDate}
                      onChange={handleEndDateChange}
                    />
                  </FieldContainer>
                </DateFieldsContainer>
              </ReviewBox>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <ReviewBottomSection>
        {/* 다음 버튼 클릭시 필수 입력 사항 확인 */}
        <ReviewNextButton onClick={handleNextClick}>다음</ReviewNextButton>
      </ReviewBottomSection>
    </>
  );
};

export default ReviewCreate;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
`;

const ReviewBoxWithSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    padding-left: 5px;
  }
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 0px;
`;

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  div {
    /* padding-left: 5px; */
  }
`;

const ReviewBottomSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 15px;
`;

const ReviewNextButton = styled.button`
  background-color: #5ac8ec;
  color: white;
  justify-content: center;
  border: none;
  width: 160px;
  height: 50px;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: #cff4ff;
  }
`;

const Title = styled.div`
  margin-left: 10px;
`;

const BringPlanBtn = styled.button`
  width: 700px;
  height: 60px;
  margin: 0 auto;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  background-color: #cff4ff;
  color: #238bad;
  margin: 25px 0;
  cursor: pointer;
`;

export const TitleWithCircle = styled.span`
  position: relative;
  margin-right: 5px;

  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #f43b3b;
    border-radius: 50%;
    top: -3px;
    right: -10px;
  }
`;

// const Step = ({ active }: { active?: boolean }) => {
//   // active prop 추가
//   return (
//     <StepCircle $active={active}>
//     </StepCircle>
//   );
// };

// const StepCircle = styled.div<{ $active?: boolean }>`
//   // $active로 수정
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   background-color: ${({ $active }) =>
//     $active ? '#5ac8ec' : '#e0e0e0'}; // $active로 수정
// `;
