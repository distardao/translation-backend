import {
	TRANSLATEFILE_AUDIO_SUCCESS,
	TRANSLATEFILE_DOCUMENT_SUCCESS,
	TRANSLATEFILE_AUDIO_CONVERTED,
	TRANSLATEFILE_FAIL,
	TRANSLATEFILE,
	CHANGE_FILE,
	CHANGE_FILE_DOCUMENT,
	CHANGE_FILE_AUDIO,
	CHANGE_OUTPUT,
	CHANGE_OUTPUT_AUDIO,
	CHANGE_OUTPUT_DOCUMENT,
	CHANGE_FILE_AUDIO_VOICE_INPUT
} from '../constant/translateFileTypes';

export const STATE = {
	INIT: 'INIT',
	LOADING: 'LOADING',
	SUCCESS: 'SUCCESS',
	FAILURE: 'FAILURE',
};

const initialState = {
	currentState: STATE.INIT,
	documentFile: null,
	audioFile:null,
	outputTranslationFile: null,
	outputDocumentFile: null,
	outputAudioConvertedFile: null,
	outputAudioTranslatedFile: null,
	outputAudioFile: null,
	voiceInput: false,
	err: null,
};

export default function(state = initialState, action) {
	switch (action.type) {
	case CHANGE_FILE: {
		return {
			...state,
			file: action.payload.file,
		};
	}
	case CHANGE_FILE_DOCUMENT: {
		return {
			...state,
			documentFile: action.payload.file,
		};
	}
	case CHANGE_FILE_AUDIO: {
		return {
			...state,
			audioFile: action.payload.file,
		};
	}
	case CHANGE_FILE_AUDIO_VOICE_INPUT: {
		return {
			...state,
			audioFile: action.payload.file,
			voiceInput: action.payload.voiceInput,
		};
	}
	case TRANSLATEFILE: {
		return {
			...state,
			currentState: STATE.LOADING,
		};
	}
	case TRANSLATEFILE_AUDIO_SUCCESS: {
		return {
			...state,
			outputAudioTranslatedFile: action.payload.data,
			outputAudioFile: action.payload.data,
			currentState: STATE.SUCCESS,
		};
	}
	case TRANSLATEFILE_AUDIO_CONVERTED: {
		return {
			...state,
			outputAudioConvertedFile: action.payload.data,
			outputAudioFile:action.payload.data,
			currentState: STATE.LOADING,
		};
	}
	case TRANSLATEFILE_DOCUMENT_SUCCESS: {
		return {
			...state,
			outputDocumentFile: action.payload.data,
			currentState: STATE.SUCCESS,
		};
	}
	case TRANSLATEFILE_FAIL: {
		return {
			...state,
			currentState: STATE.FAILURE,
			err: action.payload.err,
		};
	}
	case CHANGE_OUTPUT: {
		return {
			...state,
			outputTranslationFile: action.payload.data,
		};
	}
	case CHANGE_OUTPUT_DOCUMENT: {
		return {
			...state,
			outputDocumentFile: action.payload.data,
		};
	}
	case CHANGE_OUTPUT_AUDIO: {
		return {
			...state,
			outputAudioFile: action.payload.data,
			outputAudioConvertedFile: action.payload.data,
			outputAudioTranslatedFile: action.payload.data,
		};
	}
	default:
		return state;
	}
}