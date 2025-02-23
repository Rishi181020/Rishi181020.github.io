import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  mediaList = [
    { type: 'image', src: 'assets/g1.jpg', alt: 'Image 1' },
    { type: 'image', src: 'assets/g2.jpg', alt: 'Image 2' },
    { type: 'image', src: 'assets/g3.jpg', alt: 'Image 3' },
    { type: 'image', src: 'assets/g4.jpg', alt: 'Image 4' },
    { type: 'image', src: 'assets/g5.jpg', alt: 'Image 5' },
    { type: 'image', src: 'assets/g19.jpg', alt: 'Image 19' },
    { type: 'image', src: 'assets/g6.jpg', alt: 'Image 6' },
    { type: 'image', src: 'assets/g8.jpg', alt: 'Image 8' },
    { type: 'image', src: 'assets/g7.jpg', alt: 'Image 7' },
    { type: 'image', src: 'assets/g10.jpg', alt: 'Image 10' },
    { type: 'image', src: 'assets/g11.jpg', alt: 'Image 11' },
    { type: 'image', src: 'assets/g12.jpg', alt: 'Image 12' },
    { type: 'image', src: 'assets/g13.jpg', alt: 'Image 13' },
    { type: 'image', src: 'assets/g14.jpg', alt: 'Image 14' },
    { type: 'image', src: 'assets/g15.jpg', alt: 'Image 15' },
    { type: 'image', src: 'assets/g16.jpg', alt: 'Image 16' },
    { type: 'image', src: 'assets/g18.jpg', alt: 'Image 18' },
    { type: 'image', src: 'assets/g20.jpg', alt: 'Image 20' },
    { type: 'image', src: 'assets/g21.jpg', alt: 'Image 21' },
    { type: 'image', src: 'assets/g22.jpg', alt: 'Image 22' },
    { type: 'image', src: 'assets/g23.jpg', alt: 'Image 23' },
    { type: 'image', src: 'assets/g24.jpg', alt: 'Imsage 24' },
    { type: 'image', src: 'assets/g25.jpg', alt: 'Image 25' },
    { type: 'image', src: 'assets/g26.jpg', alt: 'Image 26' },
    { type: 'image', src: 'assets/g27.jpg', alt: 'Image 27' },
    { type: 'image', src: 'assets/g28.jpg', alt: 'Image 28' },
    { type: 'image', src: 'assets/g29.jpg', alt: 'Image 25' },
    { type: 'image', src: 'assets/g30.jpg', alt: 'Image 26' },
    { type: 'image', src: 'assets/g31.jpg', alt: 'Image 27' },
    { type: 'image', src: 'assets/g32.jpg', alt: 'Image 28' },
    { type: 'image', src: 'assets/g35.jpg', alt: 'Image 29' },
    { type: 'video', src: 'assets/video1.mp4', alt: 'Video 1' },
    { type: 'video', src: 'assets/video2.mp4', alt: 'Video 1' },
  ];

  selectedMedia: { type: string, src: string, alt: string } | null = null;

  openLightbox(media: { type: string, src: string, alt: string }) {
    this.selectedMedia = media;
  }

  closeLightbox() {
    this.selectedMedia = null;
  }

}
