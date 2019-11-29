import React, { Component, useState } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/gallery.css'
import Pagination from "./Common/Pagination";
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/components/styled/scale-out-animation/styles.scss';

// Sample Images
import SampleThumbnail from '../Images/gallery_sample/collection01/3.jpg'
// const images = [{ src: 'path/to/image-1.jpg', src: 'path/to/image-2.jpg' }];
const images = [ SampleThumbnail ]
let modalIsAlreadyOpened = false;

class Gallery extends Component {
    render() {
        return (
            <div className={"fullWidth"}>
                <Header active={"gallery"}/>
                    <GalleryHeader/>
                    <GalleryContents/>
                <Footer/>
            </div>
        )
    }
}

const GalleryHeader = () => (
    <div className={"fullWidth galleryHeaderDiv"}>
        <div className={"galleryTextDiv"}>
            <div className={"galleryHeaderTitle robotoFont"}> Gallery </div>
            <div className={"galleryHeaderSubTitle notoSansFont"}> 사진 </div>
        </div>
    </div>
)

class GalleryContents extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }


    render() {
        return (
           <div className={"contents galleryContentsDiv"}>
                <div className={"galleryContentTitle"}>사진첩</div>
                <div className={"galleryContents fullWidth"}>
                    <div className={"collectionRow"}>
                        <PhotoCollection thumbnail={ SampleThumbnail }/>
                        <PhotoCollection thumbnail={ SampleThumbnail }/>
                        <PhotoCollection thumbnail={ SampleThumbnail }/>
                        <PhotoCollection thumbnail={ SampleThumbnail }/>
                    </div>
                    <Pagination/>
                </div>
            </div>
        )
    }
}

class PhotoCollection extends Component{
    constructor (props) {
        super(props)
        this.state = {
            modalIsVisible : false
        }
    }

    clickCollection = () => {
        // this.setState({modalIsVisible : !this.state.modalIsVisible});
        // if (this.state.modalIsVisible == false && !modalIsAlreadyOpened) {
        if (!modalIsAlreadyOpened) {
            modalIsAlreadyOpened = true;
            this.setState({modalIsVisible : true})
        }
        // else if (this.state.modalIsVisible == true) {
        //     modalIsAlreadyOpened = false;
        //     this.setState({modalIsVisible : false})
        // }
    }

    render() {
        return (
            <div className={"collectionDiv"} onClick={() => {this.clickCollection()}}>
                <div className={"photoCollection"}>
                    <div className={"thumbnailDiv"}>
                        <img className={"thumbnail"} src={ this.props.thumbnail }/>
                    </div>
                    <div className={"photoCommentDiv"}>
                        <div className={"photoTitle notoSansFont"}>
                            2019학년도 MT
                        </div>
                        <div className={"photoDate notoSansFont"}>
                            2019.09.17
                        </div>
                    </div>
                </div>

                {/*Modal*/}
                <div>
                    <Modal isVisible={modalIsAlreadyOpened}/>
                </div>
            </div>
        )
    }
}

class Modal extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isVisible : false
        }
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        this.setState({isVisible : modalIsAlreadyOpened})
    }

    closeModal = () => {
        this.setState({isVisible: false}, () => {modalIsAlreadyOpened = false})
    }

    render() {
        return (
              <div className={"galleryModal"} style={{display : this.state.isVisible ? "block" : "none"}}>
                  <button className={"closeButton"} onClick={this.closeModal}>
                      <svg role="presentation" viewBox="0 0 24 24" className="closeImage">
                          <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                      </svg>
                  </button>
                <Slider/>
              </div>
        )
    }
}
// const Modal = (isVisible) => (
//   <div className={"galleryModal"} style={{display : isVisible ? "none" : "block"}}>
//     <Slider/>
//   </div>
// );

const Slider = () => (
    <div className={"slide"}>
        <AwesomeSlider cssModule={AwesomeSliderStyles}>
            <div data-src="https://i.imgur.com/fsyrScY.jpg" />
            <div data-src="https://i.imgur.com/fsyrScY.jpg" />
            <div data-src="https://i.imgur.com/fsyrScY.jpg" />
        </AwesomeSlider>
    </div>
);


// class Thumbnail extends React.Component {
//     state = { modalIsOpen: false }
//     toggleModal = () => {
//         this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
//     }
//     render() {
//         const { modalIsOpen } = this.state;
//
//         return (
//             <ModalGateway>
//                 {modalIsOpen ? (
//                     <Modal onClose={this.toggleModal}>
//                         <Carousel views={images} />
//                     </Modal>
//                 ) : null}
//             </ModalGateway>
//         );
//     }
// }

export default Gallery
