function solution(cacheSize, cities) {
    // 도시 이름 검색 -> 관련 맛집 게시물
    // 로직 성능 측정, DB 캐시 적용 크기에 따른 실행 시간 측정
    // 캐시 크기 cacheSize, 0 ~ 30
    // 도시 이름 배열 cities 1 ~ 100,000, 영문자, 대소문자 구분 x
    // 배열 순서대로 처리한 총 실행시간을 리턴
    // cache miss -> 캐시에 없는 경우 
    // cache hit -> 캐시상에 있는 경우
    // 실행 시간을 저장할 변수 time = 0 선언
    // 캐시 저장 공간 선언 cache = [];
    // cache에 있는 도시인 경우, 제일 뒤로 뺀다. time += 1;
    // cache에 없는 도시인 경우, 새로운 도시를 넣는다. time += 5;
    // chche의 크기가 cacheSize이상이면 인덱스 0을 제거한다. 
    let time = 0, cache = [];
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toUpperCase()
        
        if (!cache.includes(city)) time += 5;
        else {
            let cityIdx = cache.findIndex(el => el === city);
            cache.splice(cityIdx, 1);
            time += 1;
        }
        cache.push(city);
        
        if (cache.length > cacheSize) cache.shift();
    }
    
    return time;
}