package com.kubilaycicek.archiver.util;

import java.io.*;
import java.util.Base64;

public class ImageUtil {

    private ImageUtil() {
    }

    public static String convertImageFileToBase64String(String imagePath) throws IOException {
        String base64Image = "";
        File file = new File(imagePath);
        try (FileInputStream imageInFile = new FileInputStream(file)) {
            // Reading a Image file from file system
            byte[] imageData = new byte[(int) file.length()];
            imageInFile.read(imageData);
            base64Image = Base64.getEncoder().encodeToString(imageData);
        } catch (FileNotFoundException e) {
            System.err.println("Image not found" + e);
        } catch (IOException ioe) {
            System.err.println("Exception while reading the Image " + ioe);
        }
        return base64Image;
    }

    public static void convertBase64ToImageFile(String base64Image, String pathFile) throws IOException {
        try (FileOutputStream imageOutFile = new FileOutputStream(pathFile)) {
            // Converting a Base64 String into Image byte array
            byte[] imageByteArray = Base64.getDecoder().decode(base64Image);
            imageOutFile.write(imageByteArray);
        } catch (FileNotFoundException e) {
            System.err.println("Image not found" + e);
        } catch (IOException ioe) {
            System.err.println("Exception while reading the Image " + ioe);
        }
    }
}
