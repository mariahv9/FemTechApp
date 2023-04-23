import React, { Component } from 'react';
import CarouselComponent from '../components/home/CarouselComponent';
import ProfileList from '../components/home/ProfileList';

export default class HomeView extends Component {

    render() {
        return (
            <div>
                <CarouselComponent/>
                <ProfileList/>
            </div>
        );
    }
}