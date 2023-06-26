import { Component } from 'react';

class ImageGalryItem extends Component {
  render() {
    const { imageUrl, altText } = this.props;
    return (
      <li class="gallery-item">
        <img src={imageUrl} alt={altText} />
      </li>
    );
  }
}

export default ImageGalryItem;
