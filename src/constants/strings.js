export const strings = {
  // Common Messages
  WARNING: 'Warning',
  SUCCESS: 'Success',
  FAILED: 'Failed',
  ERROR: 'Error',
  
  // App Title
  APP_TITLE: 'Listen. Feel. Heal',
  
  // Section Titles
  MADE_FOR_YOU: 'Made for You',
  PLAY_SOMETHING_RANDOM: 'Play Something Random',
  MY_ROUTINE: 'My Routine',
  
  // Actions
  ADD_ACTIVITY: 'Add an activity',
  
  // Alert Messages
  MENU_PRESSED: 'Menu button pressed',
  NOTIFICATIONS_PRESSED: 'Notifications button pressed',
  ADD_NEW_ACTIVITY: 'Add new activity',
  
  // Success Messages
  ACTIVITY_ADDED_SUCCESS: 'Activity added successfully',
  ACTIVITY_DELETED_SUCCESS: 'Activity deleted successfully',
  ROUTINE_UPDATED_SUCCESS: 'Routine updated successfully',
  FAVORITE_ADDED_SUCCESS: 'Added to favorites',
  FAVORITE_REMOVED_SUCCESS: 'Removed from favorites',
  
  // Error Messages
  ACTIVITY_ADD_FAILED: 'Failed to add activity',
  ACTIVITY_DELETE_FAILED: 'Failed to delete activity',
  ROUTINE_UPDATE_FAILED: 'Failed to update routine',
  SOMETHING_WENT_WRONG: 'Something went wrong',
  
  // Validation Messages
  ACTIVITY_NAME_REQUIRED: 'Activity name is required',
  TIME_REQUIRED: 'Time is required',
  
  // Dynamic Messages (Functions)
  ITEM_SELECTED: (title, subtitle) => `You selected: ${title} by ${subtitle}`,
  MADE_FOR_USER: (userName) => `Made for You, ${userName}`,
};
