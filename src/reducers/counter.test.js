import assert from 'assert';
import counterReducer from './counter';
import { INCREMENT, DECREMENT } from '../constants';
import { Map } from 'immutable';

let state = counterReducer(undefined, {});

describe('counter reducer', () => {
  describe('inital state', () => {
    it('should be a Map', () => {
      assert.strictEqual(Map.isMap(state), true);
    });
  });

  describe('on INCREMENT', () => {
    it('should increment state.value', () => {
      const previousValue = state.get('value');
      state = fireAction(INCREMENT, state);
      assert.strictEqual(previousValue + 1, state.get('value'));
    });
  });

  describe('on DECREMENT', () => {
    it('should decrement state.value', () => {
      const previousValue = state.get('value');
      state = fireAction(DECREMENT, state);
      assert.strictEqual(previousValue - 1, state.get('value'));
    });
  });
});

function fireAction(actionType, currentState) {
  return counterReducer(currentState, {
    type: actionType,
  });
}
