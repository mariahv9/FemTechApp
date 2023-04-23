import React, { Component } from 'react';
import CarouselComponent from '../components/home/CarouselComponent';
import ProfileList from '../components/home/ProfileList';
import ProfileSelector from '../components/home/ProfileSelector';

export default class HomeView extends Component {

    render() {
        return (
            <div>
                <CarouselComponent/>
                <ProfileSelector/>
                <ProfileList/>
            </div>
        );
    }
}