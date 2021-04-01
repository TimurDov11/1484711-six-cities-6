import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute, adaptToClient, adaptCommentsToClient} from "../const";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => data.map(adaptToClient))
    .then((data) => dispatch(ActionCreator.loadHotels(data)))
);

export const fetchHotelId = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => adaptToClient(data))
    .then((data) => dispatch(ActionCreator.loadHotelId(data)))
);

export const fetchCommentsHotelId = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => data.map(adaptCommentsToClient))
    .then((data) => dispatch(ActionCreator.loadCommentsHotelId(data)))
);

export const fetchHotelsNearbyHotelId = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => data.map(adaptToClient))
    .then((data) => dispatch(ActionCreator.loadHotelsNearbyHotelId(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.getAuthInfo(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.setAuthInfo(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const commentPost = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.setCommentPost(data)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);
