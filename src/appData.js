// [정적 데이터 상수 강제 매핑 - API/DB 의존성 제거]
const PORTFOLIO_DATA = [
    { id: 'dEPkxRTjsy8', title: '한양대 토크콘서트 인트로 영상', cat: 'production', tag: '한양대', label: '모션그래픽' },
    { id: 'nzSjVbxNrnc', title: 'NE능률 나는쌤이다 웹예능 콘텐츠', cat: 'edu', tag: 'NE능률', label: '교육 콘텐츠' },
    { id: 'PAvJORGcUTU', title: '에듀팡 일본어 모션그래픽 인트로', cat: 'production', tag: '에듀팡', label: '모션그래픽' },
    { id: '4cnYAzIvagw', title: '동아출판 AI 디지털 교과서 교사 인터뷰', cat: 'edu', tag: '동아출판', label: 'AI 디지털 교과서' },
    { id: 'DIdduzeub5U', title: '후미디어 뉴미디어 채널 브랜딩 인트로', cat: 'production', tag: 'WHOMEDIA', label: '채널 인트로' },
    { id: '0kHSItVXKOU', title: '능률 고등 영어 교재 연계 스마트 강좌', cat: 'edu', tag: 'NE능률', label: '이러닝 콘텐츠 개발' },
    { id: '6xb2GYInARg', title: '능률 중등 영어 맞춤형 학습 영상', cat: 'edu', tag: 'NE능률', label: '교육 콘텐츠' },
    { id: 'rJ2U9T27WwU', title: '태진옥 브랜드 시네마틱 홍보영상', cat: 'press', tag: '태진옥', label: '홍보 영상 제작' },
    { id: 'PTqpVR-yIKg', title: '경희사이버대학교 가상 크로마키 강좌', cat: 'production', tag: '경희사이버대', label: '크로마키 스튜디오' },
    { id: 'AbeWeusmjws', title: '86인치 전자칠판 스마트 강의 스튜디오', cat: 'production', tag: '전자칠판', label: '영상 프로덕션' },
    { id: 'PVVdU-CYowA', title: '웅진 스마트학습 연계 디지털 교재 강의', cat: 'edu', tag: '웅진씽크빅', label: '전자칠판' },
    { id: 'PxAZYrpdowU', title: '웅진 스마트 학습 특수 무반사 블랙보드 강의', cat: 'edu', tag: '웅진씽크빅', label: '블랙보드' },
    { id: 'x4Cb5At6Z_M', title: 'CG 인터랙티브 스마트 모션 강의', cat: 'production', tag: 'WHOMEDIA', label: 'CG/인터랙티브' },
    { id: 'JwCrB4dKgDU', title: '후캠퍼스 모바일 태블릿 에듀 강좌', cat: 'hucampus', tag: 'WHOMEDIA', label: '태블릿 강의' },
    { id: '54m2LENAo68', title: '스튜디오 대형 크로마키 강좌 연출', cat: 'production', tag: 'WHOMEDIA', label: '크로마키' },
    { id: 'WaxhtAZLLV8', title: '교수진 맞춤형 크로마키 촬영', cat: 'production', tag: 'WHOMEDIA', label: '크로마키 촬영' },
    { id: 'paYW3d0MRqk', title: 'EBS 올쏘 핵심강좌 오프닝 모션그래픽', cat: 'production', tag: 'EBS', label: '모션그래픽' },
    { id: 'komXGh3TGSo', title: 'EBS 천일문 메인 타이틀 연출', cat: 'production', tag: 'EBS', label: '타이틀 연출' },
    { id: 'cF7i6m9apsE', title: 'EBS 포텐시리즈 모션 오프닝', cat: 'production', tag: 'EBS', label: '모션그래픽' },
    { id: '-Is7q7qD9Rc', title: '한국AI교육신문 & 뉴미디어 PR 브랜딩', cat: 'press', tag: '유튜브PR', label: '디지털 언론 PR' }
];

// GitHub + jsDelivr CDN 우회 연동 설정 (사용자 GitHub 계정명 및 저장소명 플레이스홀더)
const GITHUB_USER = '내유저명';   // 사용자 GitHub 계정명으로 교체 (예: 'whomedia')
const GITHUB_REPO = '내저장소명'; // 사용자 GitHub 저장소명으로 교체 (예: 'studio-gallery')
const GITHUB_BRANCH = 'main';

// jsDelivr 글로벌 CDN 이미지 URL 생성 유틸리티 (raw.githubusercontent.com 직접 링크 금지 지침 준수)
const getStudioCdnUrl = (fileName) => `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${GITHUB_REPO}@${GITHUB_BRANCH}/images/studio/${fileName}`;

const STUDIO_IMAGES = [
    getStudioCdnUrl('studio_chromakey_6.6m.jpg'),
    getStudioCdnUrl('studio_main_160py.jpg'),
    getStudioCdnUrl('studio_smartboard_86in.jpg'),
    getStudioCdnUrl('studio_greenboard.jpg'),
    getStudioCdnUrl('studio_camera_4k.jpg'),
    getStudioCdnUrl('studio_controlroom.jpg'),
    getStudioCdnUrl('studio_dressingroom.jpg')
];

const ORGANIZATION_DATA = [
    { id: 'div-rd', code: 'R&D CENTER', name: '기업부설연구소', desc: 'AI 기반 교육 및 미디어 융합 기술 연구' },
    { id: 'div-1', code: 'DIVISION 01', name: '콘텐츠미디어본부', desc: '이러닝 교수설계, 맞춤형 콘텐츠 개발, 전문 스튜디오 운영, 멀티캠 제작' },
    { id: 'div-2', code: 'DIVISION 02', name: '교육사업본부', desc: 'AI·직무기술 특화 교육, 한국AI교육일보 발행, 후캠퍼스 평생교육원 운영' },
    { id: 'div-4', code: 'STAFF / SUPPORT', name: '경영지원팀', desc: '경영 기획, 재무, 인사 총괄' }
];

document.addEventListener('alpine:init', () => {
    Alpine.data('whomediaApp', () => ({
        scrolled: false, 
        mobileMenuOpen: false, 
        refTab: 'all',
        portfolioLimit: 12,
        videoModalOpen: false,
        activeVideoId: '',
        activeVideoTitle: '',
        imageModalOpen: false,
        activeStudioImg: '',
        activeStudioTitle: '',
        keywords: ['지식을 성과로 만드는 맞춤형 교육 솔루션', '맞춤형 이러닝 콘텐츠 개발', '160평 전문 스튜디오 & 고품질 영상 연출', '오프라인 기반 블렌디드 러닝 & 전문 특강', '지속가능한 성장을 이끄는 조직 체계'],
        currentKeywordIndex: 0,

        // [전체 포트폴리오 목록 - PORTFOLIO_DATA 상수로 100% 보장]
        portfolioItems: PORTFOLIO_DATA,
        studioImagesList: STUDIO_IMAGES,
        organizationDataList: ORGANIZATION_DATA,

        get filteredPortfolio() {
            if (this.refTab === 'all') return this.portfolioItems;
            return this.portfolioItems.filter(item => item.cat === this.refTab);
        },

        openModal(videoId, videoTitle) {
            this.activeVideoId = videoId;
            this.activeVideoTitle = videoTitle;
            this.videoModalOpen = true;
        },
        closeModal() {
            this.videoModalOpen = false;
            this.activeVideoId = '';
            this.activeVideoTitle = '';
        },
        openImageModal(imgUrl, title) {
            this.activeStudioImg = imgUrl;
            this.activeStudioTitle = title;
            this.imageModalOpen = true;
        },
        closeImageModal() {
            this.imageModalOpen = false;
            this.activeStudioImg = '';
            this.activeStudioTitle = '';
        },
        naverMapUrl: 'https://map.naver.com/p/search/%ED%9B%84%EB%AF%B8%EB%94%94%EC%96%B4/place/13314547',
        showMobileOrgModal: false,
        inquirySuccessModal: false,
        inquirySuccessMessage: '',
        inquirySubmitting: false,
        inquiryForm: {
            company: '',
            name: '',
            phone: '',
            category: '',
            message: '',
            consent: false
        },

        init() {
            try {
                setInterval(() => { this.currentKeywordIndex = (this.currentKeywordIndex + 1) % this.keywords.length; }, 2800);
                this.startServiceAutoPlay();
                this.startAboutAutoPlay();
                this.startStudioAutoPlay();
            } catch(e) {
                console.warn('Init non-blocking exception handled:', e);
            }
        },

        async submitInquiry() {
            if (!this.inquiryForm.company || !this.inquiryForm.name || !this.inquiryForm.phone || !this.inquiryForm.category || !this.inquiryForm.message) {
                alert('필수 문의 항목을 모두 작성해 주세요.');
                return;
            }
            if (!this.inquiryForm.consent) {
                alert('개인정보 수집 및 이용 동의에 체크해 주세요.');
                return;
            }
            this.inquirySubmitting = true;

            const createdAt = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

            // Dispatch to Express Backend (/api/inquiry)
            try {
                await fetch('/api/inquiry', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.inquiryForm)
                });
            } catch (err) {
                console.warn('Inquiry API dispatch fallback:', err);
            }

            // Direct client-side dispatch to FormSubmit API for target email list
            const targetEmails = ['whomedia03@gmail.com', 'james5183@naver.com', 'apark12321@gmail.com'];
            
            for (const email of targetEmails) {
                try {
                    await fetch('https://formsubmit.co/ajax/' + email, {
                        method: 'POST',
                        headers: { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json' 
                        },
                        body: JSON.stringify({
                            _subject: '[WHOMEDIA 신규 프로젝트 문의] ' + this.inquiryForm.company + ' - ' + this.inquiryForm.name + '님',
                            _template: 'table',
                            _captcha: 'false',
                            '기관/회사명': this.inquiryForm.company,
                            '담당자': this.inquiryForm.name,
                            '연락처': this.inquiryForm.phone,
                            '문의유형': this.inquiryForm.category,
                            '상세내용': this.inquiryForm.message,
                            '접수시각': createdAt
                        })
                    });
                } catch(e) {
                    console.warn('Client direct email dispatch exception for ' + email + ':', e);
                }
            }

            this.inquirySuccessMessage = '작성해주신 프로젝트/임대 문의가 담당자에게 성공적으로 접수되었습니다.';
            this.inquirySuccessModal = true;
            this.inquiryForm = { company: '', name: '', phone: '', category: '', message: '', consent: false };
            this.inquirySubmitting = false;
        },
        activeServiceIndex: 0,
        serviceAutoTimer: null,
        startServiceAutoPlay() {
            if (this.serviceAutoTimer) clearInterval(this.serviceAutoTimer);
            this.serviceAutoTimer = setInterval(() => {
                this.nextServiceCard();
            }, 3500);
        },
        stopServiceAutoPlay() {
            if (this.serviceAutoTimer) {
                clearInterval(this.serviceAutoTimer);
                this.serviceAutoTimer = null;
            }
        },
        restartServiceAutoPlay(delay = 6000) {
            this.stopServiceAutoPlay();
            setTimeout(() => {
                this.startServiceAutoPlay();
            }, delay);
        },
        nextServiceCard() {
            this.activeServiceIndex = (this.activeServiceIndex + 1) % 3;
            this.scrollToServiceCard();
        },
        prevServiceCard() {
            this.activeServiceIndex = (this.activeServiceIndex + 2) % 3;
            this.scrollToServiceCard();
        },
        selectServiceCard(index) {
            this.activeServiceIndex = index;
            this.scrollToServiceCard();
        },
        scrollToServiceCard() {
            const container = document.getElementById('service-cards-container') || document.getElementById('services-cards-container');
            const targetCard = document.getElementById('service-card-' + this.activeServiceIndex);
            if (container && targetCard) {
                const scrollLeft = targetCard.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (targetCard.clientWidth / 2);
                container.scrollTo({
                    left: Math.max(0, scrollLeft),
                    behavior: 'smooth'
                });
            }
        },
        aboutActiveIndex: 0,
        aboutAutoTimer: null,

        // [스튜디오 & 제작 환경 확장형 데이터 베이스 & 슬라이더 관리]
        activeStudioIndex: 0,
        studioAutoTimer: null,
        studioTouchStartX: 0,
        studioTouchEndX: 0,

        studioInfrastructure: [
            {
                id: 'chromakey_studio',
                tag: '대형 크로마키 스튜디오',
                tagColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/15',
                title: '6.6m 대형 곡면 크로마키 & 4K 촬영 스튜디오',
                spec: '6.6m 곡면 크로마키 세트 + 천장 LED 판넬 조명',
                desc: '6.6m 대형 곡면 무이음 크로마키 세트와 천장 그리드 LED 패널 시스템 조명, 4K 전문 카메라 및 프롬프터가 완비된 최첨단 가상 CG 합성 전문 스튜디오입니다.',
                imageUrl: getStudioCdnUrl('chromakey_studio.jpg'),
                fallbackUrl: '/studio_chromakey.svg',
                thumbUrl: getStudioCdnUrl('chromakey_studio_thumb.jpg')
            },
            {
                id: 'integrated_main_studio',
                tag: '통합 스튜디오 전경',
                tagColor: 'text-amber-300 border-amber-400/40 bg-amber-500/20',
                title: '160평 규모 통합 대형 스튜디오 & 부조정실 전경',
                spec: '160평 메인 세트 · 86" 전자칠판 · 6.6m 크로마키 · 천장 조명 그리드',
                desc: '천장 고광량 LED 조명 그리드, 방송용 4K 멀티 카메라, 86인치 UHD 전자칠판, 6.6m 대형 크로마키 및 통유리로 연결된 첨단 부조정실을 갖춘 후미디어의 메인 스튜디오 인프라입니다.',
                imageUrl: getStudioCdnUrl('main_studio.jpg'),
                fallbackUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1600&q=90',
                thumbUrl: getStudioCdnUrl('main_studio_thumb.jpg')
            },
            {
                id: 'smart_board_studio',
                tag: '전자칠판 스튜디오',
                tagColor: 'text-brand-mint border-brand-mint/30 bg-brand-mint/15',
                title: '86인치 4K UHD 스마트 전자칠판 스튜디오',
                spec: '86" 4K 멀티터치 · 실시간 판서 모듈',
                desc: '선명한 4K 해상도의 86인치 대형 전자칠판과 강의 전용 무반사 특수 조명 세팅으로 몰입감 넘치는 이러닝 콘텐츠를 제작합니다.',
                imageUrl: getStudioCdnUrl('smartboard_studio.jpg'),
                fallbackUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85',
                thumbUrl: getStudioCdnUrl('smartboard_studio_thumb.jpg')
            },
            {
                id: 'green_board_studio',
                tag: '녹색 칠판 스튜디오',
                tagColor: 'text-teal-300 border-teal-500/30 bg-teal-500/15',
                title: '특수 무반사 조명 판서 칠판 스튜디오',
                spec: '특수 무반사 조명 + 대형 판서 칠판',
                desc: '눈부심 없는 특수 무반사 LED 조명 설계로 전통 강의 및 판서형 교육 콘텐츠를 왜곡 없이 고화질로 렌더링합니다.',
                imageUrl: getStudioCdnUrl('greenboard_studio.jpg'),
                fallbackUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85',
                thumbUrl: getStudioCdnUrl('greenboard_studio_thumb.jpg')
            },
            {
                id: 'camera_lighting',
                tag: '카메라 & 조명',
                tagColor: 'text-purple-400 border-purple-500/30 bg-purple-500/15',
                title: '고성능 4K 멀티 카메라 & ceiling 조명 그리드',
                spec: '방송용 4K 카메라 · 천장 LED 조명 그리드',
                desc: '페디스탈 기반 4K 방송용 카메라와 천장 바텐 조명 시스템으로 왜곡 없는 화질과 고르게 빛나는 영상을 연출합니다.',
                imageUrl: getStudioCdnUrl('camera_lighting.jpg'),
                fallbackUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85',
                thumbUrl: getStudioCdnUrl('camera_lighting_thumb.jpg')
            },
            {
                id: 'control_room',
                tag: '부조정실',
                tagColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/15',
                title: '전용 다채널 스위쳐 부조정실 시스템',
                spec: '통유리 뷰어 · 4K 멀티 스위쳐 · 오디오 믹서',
                desc: '스튜디오 전경이 한눈에 보이는 통유리 구조의 전용 부조정실에서 다채널 실시간 스위칭과 모니터링을 완벽히 진행합니다.',
                imageUrl: getStudioCdnUrl('control_room.jpg'),
                fallbackUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
                thumbUrl: getStudioCdnUrl('control_room_thumb.jpg')
            },
            {
                id: 'dressing_room',
                tag: '분장 & 대기실',
                tagColor: 'text-amber-300 border-amber-500/30 bg-amber-500/15',
                title: '출연진 프라이빗 분장실 & 파우더룸',
                spec: '프라이빗 라운지 + 스타일링 파우더룸',
                desc: '강사진 및 출연진의 쾌적한 사전 대기, 메이크업, 의상 체크를 위한 프라이빗 스타일링 파우더룸과 대기 공간 조성을 지원합니다.',
                imageUrl: getStudioCdnUrl('dressing_room.jpg'),
                fallbackUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
                thumbUrl: getStudioCdnUrl('dressing_room_thumb.jpg')
            }
        ],

        startStudioAutoPlay() {
            if (this.studioAutoTimer) clearInterval(this.studioAutoTimer);
            this.studioAutoTimer = setInterval(() => {
                this.nextStudioSlide();
            }, 3800);
        },
        stopStudioAutoPlay() {
            if (this.studioAutoTimer) {
                clearInterval(this.studioAutoTimer);
                this.studioAutoTimer = null;
            }
        },
        nextStudioSlide() {
            if (!this.studioInfrastructure || this.studioInfrastructure.length === 0) return;
            this.activeStudioIndex = (this.activeStudioIndex + 1) % this.studioInfrastructure.length;
            this.scrollStudioThumbnail();
        },
        prevStudioSlide() {
            if (!this.studioInfrastructure || this.studioInfrastructure.length === 0) return;
            this.activeStudioIndex = (this.activeStudioIndex + this.studioInfrastructure.length - 1) % this.studioInfrastructure.length;
            this.scrollStudioThumbnail();
        },
        selectStudioSlide(index) {
            this.activeStudioIndex = index;
            this.scrollStudioThumbnail();
        },
        scrollStudioThumbnail() {
            const container = document.getElementById('studio-thumbs-container');
            const target = document.getElementById('studio-thumb-' + this.activeStudioIndex);
            if (container && target) {
                container.scrollTo({
                    left: target.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (target.clientWidth / 2),
                    behavior: 'smooth'
                });
            }
        },
        startAboutAutoPlay() {
            if (this.aboutAutoTimer) clearInterval(this.aboutAutoTimer);
            this.aboutAutoTimer = setInterval(() => {
                this.nextAboutCard();
            }, 4500);
        },
        stopAboutAutoPlay() {
            if (this.aboutAutoTimer) {
                clearInterval(this.aboutAutoTimer);
                this.aboutAutoTimer = null;
            }
        },
        nextAboutCard() {
            this.aboutActiveIndex = (this.aboutActiveIndex + 1) % 5;
            this.scrollToAboutCard();
        },
        prevAboutCard() {
            this.aboutActiveIndex = (this.aboutActiveIndex + 4) % 5;
            this.scrollToAboutCard();
        },
        selectAboutCard(index) {
            this.aboutActiveIndex = index;
            this.scrollToAboutCard();
        },
        scrollToAboutCard() {
            const container = document.getElementById('about-cards-container');
            const targetCard = document.getElementById('about-card-' + this.aboutActiveIndex);
            if (container && targetCard) {
                const scrollLeft = targetCard.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (targetCard.clientWidth / 2);
                container.scrollTo({
                    left: Math.max(0, scrollLeft),
                    behavior: 'smooth'
                });
            }
        },
        loadMore() {
            this.portfolioLimit += 8;
        }
    }));
});
