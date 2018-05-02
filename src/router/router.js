const Root = () => import('@/components/Root');
const Layout = () => import('@/components/Layout/Layout');
const Index = () => import('@/views/index/Index');
const Introduction = () => import('@/views/introduction/Introduction');
const IntroductionDetails = () => import('@/views/introduction/Details');
const CourseContent = () => import('@/views/content/CourseContent');
const ContentDetails = () => import('@/views/content/Details');
const Tutor = () => import('@/views/tutor/Tutor');
const Video = () => import('@/views/video/Video');
const VideoPlayer = () => import('@/views/player/Player');
const Login = () => import('@/views/common/Login');
const Error404 = () => import('@/views/error/404');

export default [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/',
        component: Root,
        children: [
            {
                path: '/index',
                component: Layout,
                children: [
                    {
                        path: '/',
                        name: 'index',
                        component: Index,
                        meta: {
                            position: 1,
                            cover: false,
                            activeIndex: 'index',
                            prevViewUrl: '',
                            nextViewUrl: '/introduction'
                        }
                    },
                    {
                        path: '/introduction',
                        name: 'introduction',
                        component: Introduction,
                        meta: {
                            position: 2,
                            cover: false,
                            activeIndex: 'introduction',
                            prevViewUrl: '/index',
                            nextViewUrl: '/tutor'
                        }
                    },
                    {
                        path: '/tutor',
                        name: 'tutor',
                        component: Tutor,
                        meta: {
                            position: 3,
                            cover: false,
                            activeIndex: 'tutor',
                            prevViewUrl: '/introduction',
                            nextViewUrl: '/content'
                        }
                    },
                    {
                        path: '/content',
                        name: 'courseContent',
                        component: CourseContent,
                        meta: {
                            position: 4,
                            cover: false,
                            activeIndex: 'content',
                            prevViewUrl: '/tutor',
                            nextViewUrl: '/video'
                        }
                    },
                    {
                        path: '/video',
                        name: 'video',
                        component: Video,
                        meta: {
                            position: 5,
                            cover: false,
                            activeIndex: 'video',
                            prevViewUrl: '/content',
                            nextViewUrl: ''
                        }
                    }
                ]
            },
            {
                path: '/introduction/details',
                name: 'introductionDetails',
                component: IntroductionDetails,
                meta: {
                    position: 6,
                    cover: true,
                    activeIndex: 'introduction',
                    prevViewUrl: '',
                    nextViewUrl: ''
                }
            },
            {
                path: '/content/details/:index',
                name: 'contentDetails',
                component: ContentDetails,
                meta: {
                    position: 7,
                    cover: true,
                    activeIndex: 'content',
                    prevViewUrl: '',
                    nextViewUrl: ''
                }
            },
            {
                path: '/video/play/:id',
                name: 'videoPlayer',
                component: VideoPlayer,
                meta: {
                    position: 8,
                    cover: true,
                    activeIndex: 'video',
                    prevViewUrl: '',
                    nextViewUrl: ''
                }
            },
            {
                path: '/login',
                name: 'Login',
                component: Login,
                meta: {
                    position: 9,
                    cover: false,
                    activeIndex: '',
                    prevViewUrl: '',
                    nextViewUrl: ''
                }
            },
            {
                path: '/404',
                name: '404',
                component: Error404,
                meta: {
                    position: 10,
                    cover: true,
                    activeIndex: '',
                    prevViewUrl: '',
                    nextViewUrl: ''
                }
            },
            {
                path: '*',
                redirect: '/404'
            }
        ]
    }
];
