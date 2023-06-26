import ImageGalryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

class ImageGalery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul>
        {images.map(image => (
          <ImageGalryItem key={image.id} image={image} />
        ))}
        ;
      </ul>
    );
  }
}

export default ImageGalery;
