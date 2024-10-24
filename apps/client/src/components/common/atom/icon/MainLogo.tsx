import React from "react"

interface MainLogoProps {
	width?: number
	height?: number
	primaryColor?: string
	secondaryColor?: string
}

function MainLogo({
	width = 129,
	height = 52,
	primaryColor = "#FFFFFF",
	secondaryColor = "#A913F9",
}: MainLogoProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 129 52"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M65 9.14286H66.2857V10.4286H65V9.14286ZM66.2857 9.14286H67.5714V10.4286H66.2857V9.14286ZM67.5714 9.14286H68.8571V10.4286H67.5714V9.14286ZM68.8571 9.14286H70.1429V10.4286H68.8571V9.14286ZM70.1429 9.14286H71.4286V10.4286H70.1429V9.14286ZM71.4286 9.14286H72.7143V10.4286H71.4286V9.14286ZM71.4286 10.4286H72.7143V11.7143H71.4286V10.4286ZM70.1429 10.4286H71.4286V11.7143H70.1429V10.4286ZM68.8571 10.4286H70.1429V11.7143H68.8571V10.4286ZM67.5714 10.4286H68.8571V11.7143H67.5714V10.4286ZM66.2857 10.4286H67.5714V11.7143H66.2857V10.4286ZM65 10.4286H66.2857V11.7143H65V10.4286ZM72.7143 10.4286H74V11.7143H72.7143V10.4286ZM71.4286 11.7143H72.7143V13H71.4286V11.7143ZM72.7143 11.7143H74V13H72.7143V11.7143ZM72.7143 13H74V14.2857H72.7143V13ZM72.7143 14.2857H74V15.5714H72.7143V14.2857ZM71.4286 14.2857H72.7143V15.5714H71.4286V14.2857ZM71.4286 13H72.7143V14.2857H71.4286V13ZM71.4286 15.5714H72.7143V16.8571H71.4286V15.5714ZM71.4286 16.8571H72.7143V18.1429H71.4286V16.8571ZM70.1429 16.8571H71.4286V18.1429H70.1429V16.8571ZM70.1429 15.5714H71.4286V16.8571H70.1429V15.5714ZM68.8571 15.5714H70.1429V16.8571H68.8571V15.5714ZM68.8571 16.8571H70.1429V18.1429H68.8571V16.8571ZM67.5714 16.8571H68.8571V18.1429H67.5714V16.8571ZM67.5714 15.5714H68.8571V16.8571H67.5714V15.5714ZM66.2857 15.5714H67.5714V16.8571H66.2857V15.5714ZM65 15.5714H66.2857V16.8571H65V15.5714ZM65 16.8571H66.2857V18.1429H65V16.8571ZM66.2857 16.8571H67.5714V18.1429H66.2857V16.8571ZM65 11.7143H66.2857V13H65V11.7143ZM66.2857 11.7143H67.5714V13H66.2857V11.7143ZM66.2857 13H67.5714V14.2857H66.2857V13ZM66.2857 14.2857H67.5714V15.5714H66.2857V14.2857ZM65 13H66.2857V14.2857H65V13ZM65 14.2857H66.2857V15.5714H65V14.2857ZM65 18.1429H66.2857V19.4286H65V18.1429ZM66.2857 18.1429H67.5714V19.4286H66.2857V18.1429ZM66.2857 19.4286H67.5714V20.7143H66.2857V19.4286ZM66.2857 20.7143H67.5714V22H66.2857V20.7143ZM65 20.7143H66.2857V22H65V20.7143ZM65 19.4286H66.2857V20.7143H65V19.4286ZM72.7143 15.5714H74V16.8571H72.7143V15.5714ZM76.5748 15.5714H77.8605V16.8571H76.5748V15.5714ZM77.8605 15.5714H79.1462V16.8571H77.8605V15.5714ZM79.1462 15.5714H80.4319V16.8571H79.1462V15.5714ZM80.4319 15.5714H81.7176V16.8571H80.4319V15.5714ZM77.8605 16.8571H79.1462V18.1429H77.8605V16.8571ZM76.5748 16.8571H77.8605V18.1429H76.5748V16.8571ZM79.1462 16.8571H80.4319V18.1429H79.1462V16.8571ZM80.4319 16.8571H81.7176V18.1429H80.4319V16.8571ZM81.7176 18.1429H83.0033V19.4286H81.7176V18.1429ZM83.0033 16.8571H84.2891V18.1429H83.0033V16.8571ZM81.7176 16.8571H83.0033V18.1429H81.7176V16.8571ZM83.0033 18.1429H84.2891V19.4286H83.0033V18.1429ZM81.7176 19.4286H83.0033V20.7143H81.7176V19.4286ZM83.0033 19.4286H84.2891V20.7143H83.0033V19.4286ZM83.0033 20.7143H84.2891V22H83.0033V20.7143ZM81.7176 20.7143H83.0033V22H81.7176V20.7143ZM76.5748 20.7143H77.8605V22H76.5748V20.7143ZM75.2891 20.7143H76.5748V22H75.2891V20.7143ZM75.2891 19.4286H76.5748V20.7143H75.2891V19.4286ZM76.5748 19.4286H77.8605V20.7143H76.5748V19.4286ZM76.5748 18.1429H77.8605V19.4286H76.5748V18.1429ZM75.2891 18.1429H76.5748V19.4286H75.2891V18.1429ZM75.2891 16.8571H76.5748V18.1429H75.2891V16.8571ZM75.2891 15.5714H76.5748V16.8571H75.2891V15.5714ZM75.2891 14.2857H76.5748V15.5714H75.2891V14.2857ZM76.5748 14.2857H77.8605V15.5714H76.5748V14.2857ZM75.2891 9.14286H76.5748V10.4286H75.2891V9.14286ZM76.5748 9.14286H77.8605V10.4286H76.5748V9.14286ZM77.8605 9.14286H79.1462V10.4286H77.8605V9.14286ZM79.1462 9.14286H80.4319V10.4286H79.1462V9.14286ZM80.4319 9.14286H81.7176V10.4286H80.4319V9.14286ZM81.7176 9.14286H83.0033V10.4286H81.7176V9.14286ZM81.7176 10.4286H83.0033V11.7143H81.7176V10.4286ZM80.4319 10.4286H81.7176V11.7143H80.4319V10.4286ZM79.1462 10.4286H80.4319V11.7143H79.1462V10.4286ZM77.8605 10.4286H79.1462V11.7143H77.8605V10.4286ZM76.5748 10.4286H77.8605V11.7143H76.5748V10.4286ZM75.2891 10.4286H76.5748V11.7143H75.2891V10.4286ZM75.2891 11.7143H76.5748V13H75.2891V11.7143ZM75.2891 13H76.5748V14.2857H75.2891V13ZM76.5748 13H77.8605V14.2857H76.5748V13ZM76.5748 11.7143H77.8605V13H76.5748V11.7143ZM81.7176 11.7143H83.0033V13H81.7176V11.7143ZM83.0033 11.7143H84.2891V13H83.0033V11.7143ZM83.0033 10.4286H84.2891V11.7143H83.0033V10.4286ZM83.0033 13H84.2891V14.2857H83.0033V13ZM81.7176 13H83.0033V14.2857H81.7176V13ZM81.7176 14.2857H83.0033V15.5714H81.7176V14.2857ZM83.0033 14.2857H84.2891V15.5714H83.0033V14.2857ZM81.7176 15.5714H83.0033V16.8571H81.7176V15.5714ZM88.1496 9.14286H89.4353V10.4286H88.1496V9.14286ZM86.8638 9.14286H88.1496V10.4286H86.8638V9.14286ZM86.8638 10.4286H88.1496V11.7143H86.8638V10.4286ZM88.1496 10.4286H89.4353V11.7143H88.1496V10.4286ZM89.4353 10.4286H90.721V11.7143H89.4353V10.4286ZM89.4353 9.14286H90.721V10.4286H89.4353V9.14286ZM90.721 9.14286H92.0067V10.4286H90.721V9.14286ZM92.0067 9.14286H93.2924V10.4286H92.0067V9.14286ZM92.0067 10.4286H93.2924V11.7143H92.0067V10.4286ZM90.721 10.4286H92.0067V11.7143H90.721V10.4286ZM90.721 11.7143H92.0067V13H90.721V11.7143ZM92.0067 11.7143H93.2924V13H92.0067V11.7143ZM93.2924 10.4286H94.5781V11.7143H93.2924V10.4286ZM93.2924 11.7143H94.5781V13H93.2924V11.7143ZM93.2924 13H94.5781V14.2857H93.2924V13ZM93.2924 14.2857H94.5781V15.5714H93.2924V14.2857ZM93.2924 15.5714H94.5781V16.8571H93.2924V15.5714ZM93.2924 16.8571H94.5781V18.1429H93.2924V16.8571ZM93.2924 18.1429H94.5781V19.4286H93.2924V18.1429ZM93.2924 19.4286H94.5781V20.7143H93.2924V19.4286ZM92.0067 19.4286H93.2924V20.7143H92.0067V19.4286ZM92.0067 18.1429H93.2924V19.4286H92.0067V18.1429ZM92.0067 16.8571H93.2924V18.1429H92.0067V16.8571ZM92.0067 15.5714H93.2924V16.8571H92.0067V15.5714ZM92.0067 14.2857H93.2924V15.5714H92.0067V14.2857ZM92.0067 13H93.2924V14.2857H92.0067V13ZM90.721 18.1429H92.0067V19.4286H90.721V18.1429ZM90.721 19.4286H92.0067V20.7143H90.721V19.4286ZM92.0067 20.7143H93.2924V22H92.0067V20.7143ZM90.721 20.7143H92.0067V22H90.721V20.7143ZM89.4353 20.7143H90.721V22H89.4353V20.7143ZM89.4353 19.4286H90.721V20.7143H89.4353V19.4286ZM88.1496 20.7143H89.4353V22H88.1496V20.7143ZM86.8638 20.7143H88.1496V22H86.8638V20.7143ZM86.8638 19.4286H88.1496V20.7143H86.8638V19.4286ZM88.1496 19.4286H89.4353V20.7143H88.1496V19.4286ZM88.1496 18.1429H89.4353V19.4286H88.1496V18.1429ZM86.8638 18.1429H88.1496V19.4286H86.8638V18.1429ZM85.5781 19.4286H86.8638V20.7143H85.5781V19.4286ZM85.5781 18.1429H86.8638V19.4286H85.5781V18.1429ZM85.5781 16.8571H86.8638V18.1429H85.5781V16.8571ZM85.5781 15.5714H86.8638V16.8571H85.5781V15.5714ZM85.5781 14.2857H86.8638V15.5714H85.5781V14.2857ZM85.5781 13H86.8638V14.2857H85.5781V13ZM85.5781 11.7143H86.8638V13H85.5781V11.7143ZM86.8638 11.7143H88.1496V13H86.8638V11.7143ZM85.5781 10.4286H86.8638V11.7143H85.5781V10.4286ZM88.1496 11.7143H89.4353V13H88.1496V11.7143ZM86.8638 13H88.1496V14.2857H86.8638V13ZM86.8638 14.2857H88.1496V15.5714H86.8638V14.2857ZM86.8638 15.5714H88.1496V16.8571H86.8638V15.5714ZM86.8638 16.8571H88.1496V18.1429H86.8638V16.8571ZM95.8672 20.7143H97.1529V22H95.8672V20.7143ZM95.8672 19.4286H97.1529V20.7143H95.8672V19.4286ZM95.8672 18.1429H97.1529V19.4286H95.8672V18.1429ZM95.8672 16.8571H97.1529V18.1429H95.8672V16.8571ZM95.8672 15.5714H97.1529V16.8571H95.8672V15.5714ZM95.8672 14.2857H97.1529V15.5714H95.8672V14.2857ZM97.1529 14.2857H98.4386V15.5714H97.1529V14.2857ZM97.1529 13H98.4386V14.2857H97.1529V13ZM97.1529 11.7143H98.4386V13H97.1529V11.7143ZM97.1529 10.4286H98.4386V11.7143H97.1529V10.4286ZM95.8672 10.4286H97.1529V11.7143H95.8672V10.4286ZM95.8672 9.14286H97.1529V10.4286H95.8672V9.14286ZM95.8672 11.7143H97.1529V13H95.8672V11.7143ZM95.8672 13H97.1529V14.2857H95.8672V13ZM97.1529 9.14286H98.4386V10.4286H97.1529V9.14286ZM97.1529 15.5714H98.4386V16.8571H97.1529V15.5714ZM97.1529 16.8571H98.4386V18.1429H97.1529V16.8571ZM97.1529 18.1429H98.4386V19.4286H97.1529V18.1429ZM97.1529 19.4286H98.4386V20.7143H97.1529V19.4286ZM97.1529 20.7143H98.4386V22H97.1529V20.7143ZM98.4386 11.7143H99.7243V13H98.4386V11.7143ZM98.4386 13H99.7243V14.2857H98.4386V13ZM99.7243 13H101.01V14.2857H99.7243V13ZM99.7243 14.2857H101.01V15.5714H99.7243V14.2857ZM101.01 14.2857H102.296V15.5714H101.01V14.2857ZM101.01 15.5714H102.296V16.8571H101.01V15.5714ZM102.296 14.2857H103.581V15.5714H102.296V14.2857ZM102.296 13H103.581V14.2857H102.296V13ZM103.581 13H104.867V14.2857H103.581V13ZM103.581 11.7143H104.867V13H103.581V11.7143ZM104.867 9.14286H106.153V10.4286H104.867V9.14286ZM104.867 10.4286H106.153V11.7143H104.867V10.4286ZM104.867 11.7143H106.153V13H104.867V11.7143ZM104.867 13H106.153V14.2857H104.867V13ZM104.867 14.2857H106.153V15.5714H104.867V14.2857ZM104.867 15.5714H106.153V16.8571H104.867V15.5714ZM104.867 16.8571H106.153V18.1429H104.867V16.8571ZM104.867 18.1429H106.153V19.4286H104.867V18.1429ZM104.867 19.4286H106.153V20.7143H104.867V19.4286ZM104.867 20.7143H106.153V22H104.867V20.7143ZM106.153 20.7143H107.439V22H106.153V20.7143ZM106.153 19.4286H107.439V20.7143H106.153V19.4286ZM106.153 18.1429H107.439V19.4286H106.153V18.1429ZM106.153 16.8571H107.439V18.1429H106.153V16.8571ZM106.153 15.5714H107.439V16.8571H106.153V15.5714ZM106.153 14.2857H107.439V15.5714H106.153V14.2857ZM106.153 13H107.439V14.2857H106.153V13ZM106.153 11.7143H107.439V13H106.153V11.7143ZM106.153 10.4286H107.439V11.7143H106.153V10.4286ZM106.153 9.14286H107.439V10.4286H106.153V9.14286ZM98.4386 10.4286H99.7243V11.7143H98.4386V10.4286ZM99.7243 11.7143H101.01V13H99.7243V11.7143ZM101.01 13H102.296V14.2857H101.01V13ZM102.296 11.7143H103.581V13H102.296V11.7143ZM103.581 10.4286H104.867V11.7143H103.581V10.4286ZM108.734 9.14286H110.02V10.4286H108.734V9.14286ZM110.02 9.14286H111.306V10.4286H110.02V9.14286ZM111.306 9.14286H112.592V10.4286H111.306V9.14286ZM112.592 9.14286H113.877V10.4286H112.592V9.14286ZM113.877 9.14286H115.163V10.4286H113.877V9.14286ZM115.163 9.14286H116.449V10.4286H115.163V9.14286ZM115.163 10.4286H116.449V11.7143H115.163V10.4286ZM113.877 10.4286H115.163V11.7143H113.877V10.4286ZM112.592 10.4286H113.877V11.7143H112.592V10.4286ZM111.306 10.4286H112.592V11.7143H111.306V10.4286ZM110.02 10.4286H111.306V11.7143H110.02V10.4286ZM108.734 10.4286H110.02V11.7143H108.734V10.4286ZM116.449 10.4286H117.734V11.7143H116.449V10.4286ZM115.163 11.7143H116.449V13H115.163V11.7143ZM116.449 11.7143H117.734V13H116.449V11.7143ZM116.449 13H117.734V14.2857H116.449V13ZM116.449 14.2857H117.734V15.5714H116.449V14.2857ZM115.163 14.2857H116.449V15.5714H115.163V14.2857ZM115.163 13H116.449V14.2857H115.163V13ZM115.163 15.5714H116.449V16.8571H115.163V15.5714ZM115.163 16.8571H116.449V18.1429H115.163V16.8571ZM113.877 16.8571H115.163V18.1429H113.877V16.8571ZM113.877 15.5714H115.163V16.8571H113.877V15.5714ZM112.592 15.5714H113.877V16.8571H112.592V15.5714ZM112.592 16.8571H113.877V18.1429H112.592V16.8571ZM111.306 16.8571H112.592V18.1429H111.306V16.8571ZM111.306 15.5714H112.592V16.8571H111.306V15.5714ZM110.02 15.5714H111.306V16.8571H110.02V15.5714ZM108.734 15.5714H110.02V16.8571H108.734V15.5714ZM108.734 16.8571H110.02V18.1429H108.734V16.8571ZM110.02 16.8571H111.306V18.1429H110.02V16.8571ZM108.734 11.7143H110.02V13H108.734V11.7143ZM110.02 11.7143H111.306V13H110.02V11.7143ZM110.02 13H111.306V14.2857H110.02V13ZM110.02 14.2857H111.306V15.5714H110.02V14.2857ZM108.734 13H110.02V14.2857H108.734V13ZM108.734 14.2857H110.02V15.5714H108.734V14.2857ZM108.734 18.1429H110.02V19.4286H108.734V18.1429ZM110.02 18.1429H111.306V19.4286H110.02V18.1429ZM110.02 19.4286H111.306V20.7143H110.02V19.4286ZM110.02 20.7143H111.306V22H110.02V20.7143ZM108.734 20.7143H110.02V22H108.734V20.7143ZM108.734 19.4286H110.02V20.7143H108.734V19.4286ZM116.449 15.5714H117.734V16.8571H116.449V15.5714ZM119.023 9.14286H120.309V10.4286H119.023V9.14286ZM120.309 9.14286H121.595V10.4286H120.309V9.14286ZM121.595 9.14286H122.881V10.4286H121.595V9.14286ZM122.881 9.14286H124.166V10.4286H122.881V9.14286ZM124.166 9.14286H125.452V10.4286H124.166V9.14286ZM125.452 9.14286H126.738V10.4286H125.452V9.14286ZM125.452 10.4286H126.738V11.7143H125.452V10.4286ZM124.166 10.4286H125.452V11.7143H124.166V10.4286ZM122.881 10.4286H124.166V11.7143H122.881V10.4286ZM121.595 10.4286H122.881V11.7143H121.595V10.4286ZM120.309 10.4286H121.595V11.7143H120.309V10.4286ZM119.023 10.4286H120.309V11.7143H119.023V10.4286ZM121.595 11.7143H122.881V13H121.595V11.7143ZM121.595 13H122.881V14.2857H121.595V13ZM121.595 14.2857H122.881V15.5714H121.595V14.2857ZM121.595 15.5714H122.881V16.8571H121.595V15.5714ZM121.595 16.8571H122.881V18.1429H121.595V16.8571ZM121.595 18.1429H122.881V19.4286H121.595V18.1429ZM122.881 16.8571H124.166V18.1429H122.881V16.8571ZM122.881 15.5714H124.166V16.8571H122.881V15.5714ZM122.881 14.2857H124.166V15.5714H122.881V14.2857ZM122.881 13H124.166V14.2857H122.881V13ZM122.881 11.7143H124.166V13H122.881V11.7143ZM122.881 18.1429H124.166V19.4286H122.881V18.1429ZM122.881 19.4286H124.166V20.7143H122.881V19.4286ZM122.881 20.7143H124.166V22H122.881V20.7143ZM121.595 20.7143H122.881V22H121.595V20.7143ZM121.595 19.4286H122.881V20.7143H121.595V19.4286Z"
				fill="white"
			/>
			<path
				d="M68.8571 26.7143H70.7857V28.6429H68.8571V26.7143ZM66.9286 26.7143H68.8571V28.6429H66.9286V26.7143ZM66.9286 28.6429H68.8571V30.5714H66.9286V28.6429ZM68.8571 28.6429H70.7857V30.5714H68.8571V28.6429ZM70.7857 28.6429H72.7143V30.5714H70.7857V28.6429ZM70.7857 26.7143H72.7143V28.6429H70.7857V26.7143ZM72.7143 26.7143H74.6429V28.6429H72.7143V26.7143ZM74.6429 26.7143H76.5714V28.6429H74.6429V26.7143ZM74.6429 28.6429H76.5714V30.5714H74.6429V28.6429ZM72.7143 28.6429H74.6429V30.5714H72.7143V28.6429ZM72.7143 30.5714H74.6429V32.5H72.7143V30.5714ZM74.6429 30.5714H76.5714V32.5H74.6429V30.5714ZM76.5714 28.6429H78.5V30.5714H76.5714V28.6429ZM76.5714 30.5714H78.5V32.5H76.5714V30.5714ZM76.5714 32.5H78.5V34.4286H76.5714V32.5ZM76.5714 34.4286H78.5V36.3571H76.5714V34.4286ZM76.5714 36.3571H78.5V38.2857H76.5714V36.3571ZM76.5714 38.2857H78.5V40.2143H76.5714V38.2857ZM76.5714 40.2143H78.5V42.1429H76.5714V40.2143ZM76.5714 42.1429H78.5V44.0714H76.5714V42.1429ZM74.6429 42.1429H76.5714V44.0714H74.6429V42.1429ZM74.6429 40.2143H76.5714V42.1429H74.6429V40.2143ZM74.6429 38.2857H76.5714V40.2143H74.6429V38.2857ZM74.6429 36.3571H76.5714V38.2857H74.6429V36.3571ZM74.6429 34.4286H76.5714V36.3571H74.6429V34.4286ZM74.6429 32.5H76.5714V34.4286H74.6429V32.5ZM72.7143 40.2143H74.6429V42.1429H72.7143V40.2143ZM72.7143 42.1429H74.6429V44.0714H72.7143V42.1429ZM74.6429 44.0714H76.5714V46H74.6429V44.0714ZM72.7143 44.0714H74.6429V46H72.7143V44.0714ZM70.7857 44.0714H72.7143V46H70.7857V44.0714ZM70.7857 42.1429H72.7143V44.0714H70.7857V42.1429ZM68.8571 44.0714H70.7857V46H68.8571V44.0714ZM66.9286 44.0714H68.8571V46H66.9286V44.0714ZM66.9286 42.1429H68.8571V44.0714H66.9286V42.1429ZM68.8571 42.1429H70.7857V44.0714H68.8571V42.1429ZM68.8571 40.2143H70.7857V42.1429H68.8571V40.2143ZM66.9286 40.2143H68.8571V42.1429H66.9286V40.2143ZM65 42.1429H66.9286V44.0714H65V42.1429ZM65 40.2143H66.9286V42.1429H65V40.2143ZM65 38.2857H66.9286V40.2143H65V38.2857ZM65 36.3571H66.9286V38.2857H65V36.3571ZM65 34.4286H66.9286V36.3571H65V34.4286ZM65 32.5H66.9286V34.4286H65V32.5ZM65 30.5714H66.9286V32.5H65V30.5714ZM66.9286 30.5714H68.8571V32.5H66.9286V30.5714ZM65 28.6429H66.9286V30.5714H65V28.6429ZM68.8571 30.5714H70.7857V32.5H68.8571V30.5714ZM66.9286 32.5H68.8571V34.4286H66.9286V32.5ZM66.9286 34.4286H68.8571V36.3571H66.9286V34.4286ZM66.9286 36.3571H68.8571V38.2857H66.9286V36.3571ZM66.9286 38.2857H68.8571V40.2143H66.9286V38.2857ZM86.2193 44.0714H88.1479V46H86.2193V44.0714ZM86.2193 42.1429H88.1479V44.0714H86.2193V42.1429ZM86.2193 40.2143H88.1479V42.1429H86.2193V40.2143ZM84.2907 42.1429H86.2193V44.0714H84.2907V42.1429ZM84.2907 40.2143H86.2193V42.1429H84.2907V40.2143ZM84.2907 38.2857H86.2193V40.2143H84.2907V38.2857ZM82.3622 40.2143H84.2907V42.1429H82.3622V40.2143ZM82.3622 38.2857H84.2907V40.2143H82.3622V38.2857ZM88.1479 40.2143H90.0765V42.1429H88.1479V40.2143ZM88.1479 42.1429H90.0765V44.0714H88.1479V42.1429ZM88.1479 38.2857H90.0765V40.2143H88.1479V38.2857ZM90.0765 38.2857H92.005V40.2143H90.0765V38.2857ZM90.0765 40.2143H92.005V42.1429H90.0765V40.2143ZM92.005 38.2857H93.9336V40.2143H92.005V38.2857ZM80.4336 38.2857H82.3622V40.2143H80.4336V38.2857ZM90.0765 26.7143H92.005V28.6429H90.0765V26.7143ZM92.005 26.7143H93.9336V28.6429H92.005V26.7143ZM92.005 28.6429H93.9336V30.5714H92.005V28.6429ZM92.005 30.5714H93.9336V32.5H92.005V30.5714ZM92.005 32.5H93.9336V34.4286H92.005V32.5ZM92.005 34.4286H93.9336V36.3571H92.005V34.4286ZM90.0765 34.4286H92.005V36.3571H90.0765V34.4286ZM90.0765 36.3571H92.005V38.2857H90.0765V36.3571ZM90.0765 32.5H92.005V34.4286H90.0765V32.5ZM90.0765 30.5714H92.005V32.5H90.0765V30.5714ZM90.0765 28.6429H92.005V30.5714H90.0765V28.6429ZM92.005 36.3571H93.9336V38.2857H92.005V36.3571ZM82.3622 36.3571H84.2907V38.2857H82.3622V36.3571ZM80.4336 36.3571H82.3622V38.2857H80.4336V36.3571ZM80.4336 34.4286H82.3622V36.3571H80.4336V34.4286ZM82.3622 34.4286H84.2907V36.3571H82.3622V34.4286ZM82.3622 32.5H84.2907V34.4286H82.3622V32.5ZM80.4336 32.5H82.3622V34.4286H80.4336V32.5ZM80.4336 30.5714H82.3622V32.5H80.4336V30.5714ZM82.3622 30.5714H84.2907V32.5H82.3622V30.5714ZM80.4336 26.7143H82.3622V28.6429H80.4336V26.7143ZM82.3622 26.7143H84.2907V28.6429H82.3622V26.7143ZM82.3622 28.6429H84.2907V30.5714H82.3622V28.6429ZM80.4336 28.6429H82.3622V30.5714H80.4336V28.6429ZM95.8672 26.7143H97.7958V28.6429H95.8672V26.7143ZM97.7958 26.7143H99.7243V28.6429H97.7958V26.7143ZM97.7958 28.6429H99.7243V30.5714H97.7958V28.6429ZM97.7958 30.5714H99.7243V32.5H97.7958V30.5714ZM97.7958 32.5H99.7243V34.4286H97.7958V32.5ZM95.8672 32.5H97.7958V34.4286H95.8672V32.5ZM95.8672 30.5714H97.7958V32.5H95.8672V30.5714ZM95.8672 28.6429H97.7958V30.5714H95.8672V28.6429ZM95.8672 34.4286H97.7958V36.3571H95.8672V34.4286ZM95.8672 36.3571H97.7958V38.2857H95.8672V36.3571ZM95.8672 38.2857H97.7958V40.2143H95.8672V38.2857ZM97.7958 36.3571H99.7243V38.2857H97.7958V36.3571ZM97.7958 34.4286H99.7243V36.3571H97.7958V34.4286ZM97.7958 38.2857H99.7243V40.2143H97.7958V38.2857ZM97.7958 40.2143H99.7243V42.1429H97.7958V40.2143ZM95.8672 42.1429H97.7958V44.0714H95.8672V42.1429ZM95.8672 40.2143H97.7958V42.1429H95.8672V40.2143ZM95.8672 44.0714H97.7958V46H95.8672V44.0714ZM97.7958 44.0714H99.7243V46H97.7958V44.0714ZM97.7958 42.1429H99.7243V44.0714H97.7958V42.1429ZM99.7243 44.0714H101.653V46H99.7243V44.0714ZM101.653 44.0714H103.581V46H101.653V44.0714ZM103.581 44.0714H105.51V46H103.581V44.0714ZM103.581 42.1429H105.51V44.0714H103.581V42.1429ZM101.653 42.1429H103.581V44.0714H101.653V42.1429ZM99.7243 42.1429H101.653V44.0714H99.7243V42.1429ZM99.7243 26.7143H101.653V28.6429H99.7243V26.7143ZM101.653 26.7143H103.581V28.6429H101.653V26.7143ZM103.581 26.7143H105.51V28.6429H103.581V26.7143ZM105.51 26.7143H107.439V28.6429H105.51V26.7143ZM103.581 28.6429H105.51V30.5714H103.581V28.6429ZM101.653 28.6429H103.581V30.5714H101.653V28.6429ZM99.7243 28.6429H101.653V30.5714H99.7243V28.6429ZM99.7243 36.3571H101.653V38.2857H99.7243V36.3571ZM101.653 34.4286H103.581V36.3571H101.653V34.4286ZM99.7243 34.4286H101.653V36.3571H99.7243V34.4286ZM101.653 36.3571H103.581V38.2857H101.653V36.3571ZM105.51 28.6429H107.439V30.5714H105.51V28.6429ZM105.51 42.1429H107.439V44.0714H105.51V42.1429ZM105.51 44.0714H107.439V46H105.51V44.0714ZM103.581 34.4286H105.51V36.3571H103.581V34.4286ZM103.581 36.3571H105.51V38.2857H103.581V36.3571ZM115.153 36.3571H117.081V38.2857H115.153V36.3571ZM115.153 34.4286H117.081V36.3571H115.153V34.4286ZM117.081 34.4286H119.01V36.3571H117.081V34.4286ZM117.081 36.3571H119.01V38.2857H117.081V36.3571ZM117.081 38.2857H119.01V40.2143H117.081V38.2857ZM115.153 38.2857H117.081V40.2143H115.153V38.2857ZM115.153 30.5714H117.081V32.5H115.153V30.5714ZM115.153 32.5H117.081V34.4286H115.153V32.5ZM113.224 34.4286H115.153V36.3571H113.224V34.4286ZM113.224 32.5H115.153V34.4286H113.224V32.5ZM113.224 30.5714H115.153V32.5H113.224V30.5714ZM109.367 26.7143H111.296V28.6429H109.367V26.7143ZM111.296 26.7143H113.224V28.6429H111.296V26.7143ZM113.224 26.7143H115.153V28.6429H113.224V26.7143ZM113.224 28.6429H115.153V30.5714H113.224V28.6429ZM111.296 28.6429H113.224V30.5714H111.296V28.6429ZM109.367 28.6429H111.296V30.5714H109.367V28.6429ZM109.367 30.5714H111.296V32.5H109.367V30.5714ZM111.296 30.5714H113.224V32.5H111.296V30.5714ZM111.296 32.5H113.224V34.4286H111.296V32.5ZM111.296 34.4286H113.224V36.3571H111.296V34.4286ZM109.367 34.4286H111.296V36.3571H109.367V34.4286ZM109.367 32.5H111.296V34.4286H109.367V32.5ZM109.367 36.3571H111.296V38.2857H109.367V36.3571ZM111.296 36.3571H113.224V38.2857H111.296V36.3571ZM111.296 38.2857H113.224V40.2143H111.296V38.2857ZM111.296 40.2143H113.224V42.1429H111.296V40.2143ZM111.296 42.1429H113.224V44.0714H111.296V42.1429ZM111.296 44.0714H113.224V46H111.296V44.0714ZM109.367 44.0714H111.296V46H109.367V44.0714ZM109.367 42.1429H111.296V44.0714H109.367V42.1429ZM109.367 40.2143H111.296V42.1429H109.367V40.2143ZM109.367 38.2857H111.296V40.2143H109.367V38.2857ZM117.081 40.2143H119.01V42.1429H117.081V40.2143ZM117.081 42.1429H119.01V44.0714H117.081V42.1429ZM119.01 40.2143H120.939V42.1429H119.01V40.2143ZM119.01 38.2857H120.939V40.2143H119.01V38.2857ZM119.01 42.1429H120.939V44.0714H119.01V42.1429ZM119.01 44.0714H120.939V46H119.01V44.0714ZM120.939 44.0714H122.867V46H120.939V44.0714ZM122.867 44.0714H124.796V46H122.867V44.0714ZM122.867 42.1429H124.796V44.0714H122.867V42.1429ZM122.867 40.2143H124.796V42.1429H122.867V40.2143ZM120.939 40.2143H122.867V42.1429H120.939V40.2143ZM120.939 42.1429H122.867V44.0714H120.939V42.1429ZM120.939 38.2857H122.867V40.2143H120.939V38.2857ZM122.867 36.3571H124.796V38.2857H122.867V36.3571ZM122.867 34.4286H124.796V36.3571H122.867V34.4286ZM122.867 38.2857H124.796V40.2143H122.867V38.2857ZM120.939 36.3571H122.867V38.2857H120.939V36.3571ZM120.939 34.4286H122.867V36.3571H120.939V34.4286ZM120.939 32.5H122.867V34.4286H120.939V32.5ZM122.867 32.5H124.796V34.4286H122.867V32.5ZM122.867 30.5714H124.796V32.5H122.867V30.5714ZM120.939 26.7143H122.867V28.6429H120.939V26.7143ZM122.867 26.7143H124.796V28.6429H122.867V26.7143ZM122.867 28.6429H124.796V30.5714H122.867V28.6429ZM120.939 28.6429H122.867V30.5714H120.939V28.6429ZM120.939 30.5714H122.867V32.5H120.939V30.5714Z"
				fill={primaryColor}
			/>
			<rect
				x="51"
				y="34.8923"
				width="9.41539"
				height="25.1077"
				transform="rotate(90 51 34.8923)"
				fill={secondaryColor}
			/>
			<rect
				x="24.4116"
				y="26.7537"
				width="9.41539"
				height="25.1077"
				transform="rotate(135 24.4116 26.7537)"
				fill={secondaryColor}
			/>
			<rect
				x="17.7539"
				y="19.9846"
				width="9.41539"
				height="25.1077"
				transform="rotate(45 17.7539 19.9846)"
				fill={secondaryColor}
			/>
		</svg>
	)
}

export default MainLogo