import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import * as ActionTypes from "../constants/ActionTypes"
import Weather from "../models/Weather"

export function* hello() {
  yield delay(1000)
  console.log('HELLO')
  //yield put({type: 'INCREMENT'})
}

export function* bye(){
  console.log("BYE")
  yield
  console.log("bye 123")
}

export function* filterUser(action){
  console.log("FILTER_USER" + JSON.stringify(action))

  var {type, keyword, users} = action

  var data = []    

  if(keyword){
    data = [users[0]] 
  } else {
    data = users 
  }

  return data
}

export function* getWeatherData(action){
  let {data} = action

  console.log("Get Weather Data :" + JSON.stringify(data))
  let weather = new Weather()
  let response = yield call(weather.today, data.city, data.countryCode)

  console.log("Get Weather Data ::: " + JSON.stringify(response))
  yield put({ type: ActionTypes.SAVE_WEATHER_DATA, data: response })
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    // REGISTER actions

    yield takeEvery('HELLO', hello)
    yield takeEvery('BYE', bye)
    yield takeEvery('FILTER_USER', filterUser)
    yield takeEvery(ActionTypes.GET_WEATHER_DATA, getWeatherData)
}




