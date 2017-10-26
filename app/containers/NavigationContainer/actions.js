/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAIL,
  SELECT_TOPIC,
  TOGGLE_DRAWER,
} from './constants';

export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}

export function requestTopicsSucceeded(topics) {
  return {
    type: REQUEST_TOPICS_SUCCEEDED,
    topics,
  };
}

export function requestTopicsFail(message) {
  return {
    type: REQUEST_TOPICS_FAIL,
    message,
  };
}

export function selectTopic(topic) {
  return {
    type: SELECT_TOPIC,
    topic,
  };
}

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
  }
}