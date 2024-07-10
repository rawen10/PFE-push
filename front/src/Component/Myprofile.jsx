import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  IconButton,
  Textarea,
  Stack,
  Select,
  Option,
  Typography,
  Tabs,
  TabList,
  Tab,
  Breadcrumbs,
  Link,
  Card,
  CardActions,
  CardOverflow,
} from "@mui/joy";

import {
  HomeRounded,
  ChevronRightRounded,
  EmailRounded,
  AccessTimeFilledRounded,
  VideocamRounded,
  InsertDriveFileRounded,
  EditRounded,
} from "@mui/icons-material";

import DropZone from "./DropZone";
import FileUpload from "./FileUpload";
import CountrySelector from "./CountrySelector";
import EditorToolbar from "./EditToolbar";
import img from "../assets/rawen.jpg";
const MyProfile = () => {
  return (
    <Box style={{ paddingTop: 130 }} sx={{ flex: 1, width: "100%" }}>
      {/* <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRounded fontSize="sm" />}
          >
            <Link underline="none" color="neutral" href="#" aria-label="Home">
              <HomeRounded />
            </Link>
            <Link underline="hover" color="neutral" href="#" fontSize={12} fontWeight={500}>
              Users
            </Link>
            <Typography color="primary" fontWeight={500} fontSize={12}>
              My profile
            </Typography>
          </Breadcrumbs>
          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            My profile
          </Typography>
        </Box>
        <Tabs
          defaultValue={0}
          sx={{ bgcolor: 'transparent' }}
        >
          <TabList
            size="sm"
            sx={{
              pl: { xs: 0, md: 4 },
              justifyContent: 'left',
              [`&& .${Tab.root}`]: {
                fontWeight: '600',
                flex: 'initial',
                color: 'text.tertiary',
                [`&.${Tab.selected}`]: {
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  '&::after': {
                    height: '2px',
                    bgcolor: 'primary.500',
                  },
                },
              },
            }}
          >
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} value={0}>
              Settings
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} value={1}>
              Team
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} value={2}>
              Plan
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} value={3}>
              Billing
            </Tab>
          </TabList>
        </Tabs>
      </Box> */}
      <h1
        style={{
          background:
            "linear-gradient(to right, #FF3BFF 0%, #ECBFBF 38%, #5C24FF 76%, #D94FD5 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "Inter var, sans-serif",
          fontWeight: "400",
          fontSize: 50,
          marginBottom: 20, // Add margin bottom to create space between h1 and h2
          display: "flex",
          justifyContent: "center",
        }}
      >
        Edit profile{" "}
      </h1>
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "800px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Personal Info</Typography>
            <Typography level="body-sm">
              Customize how your profile information will appear to the
              networks.
            </Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
          >
            <Stack direction="column" spacing={1}>
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
              >
                <img
                  src={img}
                  // srcSet="https://www.facebook.com/photo/?fbid=3598318523823059&set=a.1420925628229037 "
                  loading="lazy"
                  alt="Profile Picture"
                />
              </AspectRatio>
              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  borderRadius: "50%",
                  left: 100,
                  top: 170,
                  boxShadow: "sm",
                }}
              >
                <EditRounded />
              </IconButton>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Name</FormLabel>
                <FormControl sx={{ display: "flex", gap: 2 }}>
                  <Input size="sm" placeholder="First Name" />
                  <Input size="sm" placeholder="Last Name" />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input size="sm" defaultValue="UI Developer" />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRounded />}
                    defaultValue="email@example.com"
                  />
                </FormControl>
              </Stack>
              <CountrySelector />
              <FormControl>
                <FormLabel>Timezone</FormLabel>
                <Select
                  size="sm"
                  startDecorator={<AccessTimeFilledRounded />}
                  defaultValue="1"
                >
                  <Option value="1">
                    Indochina Time (Bangkok)
                    <Typography textColor="text.tertiary" ml={0.5}>
                      — GMT+07:00
                    </Typography>
                  </Option>
                  <Option value="2">
                    Indochina Time (Ho Chi Minh City)
                    <Typography textColor="text.tertiary" ml={0.5}>
                      — GMT+07:00
                    </Typography>
                  </Option>
                </Select>
              </FormControl>
            </Stack>
          </Stack>
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Bio</Typography>
            <Typography level="body-sm">
              Write a short introduction for your profile.
            </Typography>
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}>
            <EditorToolbar />
            <Textarea
              size="sm"
              defaultValue="I'm a software developer based in Tunisia.I'm the fullstack develloper of SafeLearn."
            />
            <FormHelperText>275 characters remaining</FormHelperText>
          </Stack>
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
      </Stack>
    </Box>
  );
};

export default MyProfile;
