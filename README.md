# [FastCampus] Design System Co-Project B-Team
## Overview
본 프로젝트는 패스트 캠퍼스 ‘생산성 높은 개발을 위한 Design System Co-Project by. 김민태’ 1기에서 진행하는 최종 결과물 입니다. 저희 B팀은 파운데이션 기반으로 디자인 시스템을 구축하는 프로젝트를 진행했습니다.

## Structure

![제목 없음-2023-01-18-2311](https://user-images.githubusercontent.com/76135061/213211211-d1522940-db48-4fc7-9817-d12f42608834.png)

다음은 간단하게 각 저장소마다 어떤 역할을 하는지 적혀있습니다.

### Design System Studio [Link](https://github.com/team-auspicious/B_Design_System_Studio)
파운데이션을 수정할 수 있는 웹 사이트 입니다. 간단하게 디자이너들이 파운데이션 값을 수정할 수 있도록 사용자 친화적인 인터페이스를 고려하여 개발을 진행했습니다. 본 사이트에서 파운데이션을 수정 후 저장, 배포를 진행할 수 있습니다. 저장을 하는 경우 파운데이션 정보를 담는 데이터베이스에 저장하고, 배포를 하는 경우 npm에 자동으로 패키지가 버전이 업데이트 되어 업로드 됩니다.

### Foundation Libarary [Link](https://github.com/team-auspicious/B_Foundation_Libarary)
파운데이션을 담고있는 라이브러리 입니다. 본 라이브러리를 통해서 컴포넌트는 파운데이션을 쉽게 npm에서 사용할 수 있습니다. 파운데이션은 현재 color, layout, spacing, typography 등이 있습니다.

### Component Library [Link](https://github.com/team-auspicious/B_Component_Library)
컴포넌트를 담고있는 라이브러리 입니다. 본 라이브러리를 통해서 다수의 프로덕트 프로젝트에서 컴포넌트를 가져다 사용할 수 있습니다. 컴포넌트 라이브러리에서는 npm으로 배포할 수 있는 스크립트가 있습니다. 컴포넌트를 업데이트 한 후 배포를 진행하면 프로덕트 프로젝트에서는 손쉽게 컴포넌트 라이브러리를 업데이트 할 수 있습니다.

또한, 컴포넌트 라이브러리에서 코어 트래킹 플러그인을 실행할 수 있습니다. 이를 통해 파운데이션 요소들이 컴포넌트에서 얼마나 사용되는지 개수 등을 알 수 있습니다.

### Ex-Production-Project [Link](https://github.com/team-auspicious/B_Ex-Production-Project)
디자인 시스템을 구성하기 위해 프로덕트에 해당하는 예시 프로젝트 입니다. 간단하게 칸반 보드로 이루어진 웹 애플리케이션 입니다. 

### Design System Server
서버는 NodeJS와 NestJS를 이용해 구성되어 있습니다.  데이터베이스는 SaaS인 Supabase를 이용합니다.

## Team Story

### 이강호
### 황희정
### 홍수민

## Reference
* ReactJS
* Redux / Redux-toolkit
* Chakra UI
* Webpack
* Rollup
* NestJS
* Supabase
* npm
* Github Action
