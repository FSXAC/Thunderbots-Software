import { ILayer } from './visualizer';

/*
 * This file specifies the format of the application state
 */

/**
 * The application state
 */
export interface IRootState {
    ros: IROSState;
}

/**
 * The state object for ROS
 */
export interface IROSState {
    status: 'connected' | 'disconnected' | 'error';
    errorMessage: string;
    nodes: string[];
    topics: string[];
    services: string[];
    params: string[];
}

/**
 * The state object for the visualizer
 */
export interface IVisualizerState {
    layerOrder: string[];
    layers: { [K: string]: ILayer };
}
