import React, { useEffect, useState } from "react";
import { getImageUrl } from "../firebase";
import { Skeleton } from "@mui/material";  

const ImageFire: React.FC<{ image: string }> = ({ image }) => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchImageUrl = async () => {
            try {
                const url = await getImageUrl(image);
                setImageUrl(url);
            } catch (error) {
                console.error("Failed to load image:", error);
            }
        };

        fetchImageUrl();

    }, []);

    return (
        <div>
            {imageUrl && imageUrl.length > 0 ?
                <img src={imageUrl} alt={image} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                :
                <Skeleton
                    variant="rectangular"
                    width={300} height={600}
                />
            }
        </div>
    );
};

export default ImageFire;