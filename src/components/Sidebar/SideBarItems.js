import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {IoChatbubbleOutline} from 'react-icons/io5';
import {IoCubeOutline} from 'react-icons/io5';
import {BsBoxSeam} from 'react-icons/bs';
import {MdOutlineInventory2} from 'react-icons/md';
import { FiSettings,FiPenTool,FiHelpCircle } from 'react-icons/fi';
// import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';


export const navbarList = [
    {
    icon: GridViewOutlinedIcon,
    desc: 'Dashboard',
    secondDesc: '',
    badge: 0,
    subList: [],
    },
    {
        icon: IoCubeOutline,
        desc: 'Product',
        secondDesc: '',
        badge: 0,
        subList: [],
    },
    {
        icon: FavoriteBorderOutlinedIcon,
        desc: 'Favorites',
        secondDesc: 'Message from andi',
        badge: 0,
        subList: [],
    },
    {
        icon: IoChatbubbleOutline,
        desc: 'Messages',
        secondDesc: '',
        badge: 4,
        subList: [],
    },
    {
        icon: BsBoxSeam,
        desc: 'Order Lists',
        secondDesc: '',
        badge: 2,
        subList: [],
    },
    {
        icon: MdOutlineInventory2,
        desc: 'Product Stock',
        secondDesc: '',
        badge: 0,
        subList: [],
    },
    ];

    export const navbarList1 = [
    {
        icon: FiSettings,
        desc: 'Setting',
        secondDesc: '',
        badge: 2,
        subList: [],
    },
    {
        icon: FiPenTool,
        desc: 'Themes',
        secondDesc: '',
        badge: 0,
        subList: [],
    },
    {
        icon: FiHelpCircle,
        desc: 'Help',
        secondDesc: 'Message from andi',
        badge: 0,
        subList: [],
    },
    
    ];

    // export default navbarList;
