import * as React from 'react';
import BasicCard from "../components/Card";
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout';
import { Box } from '@mui/material';

const ports = [
    {
        title: "CinemaTix: App for Movie Ticket and Wallet app",
        description: "• UIKit and SwiftUI • MVVM architecture • QRCode • FaceID • Reactive(RxSwift) • Dark Mode • Localization • Google Face Recognition",
        link: "github.com/rizkyeky/CinemaTix-UIKitSwift",
        icons: ["swift", "apple"]
    },
    {
        title: "High Res: App for Image Upscale with AI",
        description: "• Flutter • Dart FFI • C++ Dynamic Library • Python • OpenCV • PyTorch • ONNX • Real-ESRGAN & AnimeSR Super Resolution AI Model",
        link: "github.com/rizkyeky/HighResApp-Flutter",
        icons: ["flutter", "cpp", "python", "torch"]
    },
    {
        title: "Guest Image: App for Image Predict with AI",
        description: "• Flutter • Cupertino Design • Swift for IOS and MacOS • CoreML • MobileNet-V3 Classification AI Model",
        link: "github.com/rizkyeky/GuestImage-FlutterSwift",
        icons: ["flutter", "swift", "coreml"]
    },
    {
        title: "Torch Lib: Flutter Torch Library",
        description: "• Flutter • Dart FFI • C++ Dynamic Library • OpenCV • PyTorch",
        link: "github.com/rizkyeky/MyFlutterTorchLib",
        icons: ["flutter", "cpp", "torch"]
    },
    {
        title: "APR Merchant: App for Starting a Business",
        description: "• Flutter • Custom UI Design • REST API • GetX State Management • MVVM clean architecture",
        link: "github.com/rizkyeky/APR-Flutter",
        icons: ["flutter"]
    },
    {
        title: "Belajar Jepang: App for Learning Japanese",
        description: "• Flutter • Material Design • GetX State Management • MVVM clean architecture",
        link: "github.com/rizkyeky/BelajarJepang-Flutter",
        icons: ["flutter"]
    },
    {
        title: "EdgeFormer: AI Model for Robot Soccer Vision",
        description: "• Python • OpenCV • PyTorch • Parc-Net Edge Detection AI Model",
        link: "github.com/rizkyeky/EdgeFormer-PyTorch",
        icons: ["python", "torch"]
    },
    {
        title: "Uangku: App for Saving Money",
        description: "• Flutter • Custom UI Design • REST API • GetX State Management • MVVM clean architecture",
        link: "github.com/rizkyeky/Uangku-Flutter",
        icons: ["flutter"]
    }
]

function PortPage() {
    return (
        <Box sx={{ padding: '16px' }}>
            <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {ports.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.title}>
                        <BasicCard title={item.title} description={item.description} link={item.link} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

const HomePage = () => {
  return (
    <Layout>
      <PortPage />
    </Layout>
  );
};

export default HomePage;