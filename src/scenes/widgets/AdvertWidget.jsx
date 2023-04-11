import { Typography, useTheme } from "@mui/material";
import { server } from "App";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">SPONSORED</Typography>
                <Typography color={medium} >CREATE AD</Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src={`${server}/assets/info4.jpeg`}
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
            <FlexBetween>
                <Typography color={main}>SundarCosmetics</Typography>
                <Typography color={medium}>sundarcosmetics.com</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                Your pathway to beauty.
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;