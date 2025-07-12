import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';

// Convert all JPG, JPEG, and PNG images to WebP
const convertImages = async () => {
  try {
    // Convert images and save as WebP
    const files = await imagemin(['src/assets/*.{jpg,jpeg,png}'], {
      destination: 'src/assets',
      plugins: [
        imageminWebp({
          quality: 85, // Good quality balance
          effort: 6   // Higher effort for better compression
        })
      ]
    });
    
    console.log('✅ Images converted to WebP:');
    files.forEach(file => {
      console.log(`  - ${path.basename(file.destinationPath)}`);
    });
    
    console.log('\n🎉 All images successfully converted to WebP format!');
  } catch (error) {
    console.error('❌ Error converting images:', error);
  }
};

convertImages();
