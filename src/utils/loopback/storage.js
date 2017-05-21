
export default {

  save(key, value, ttl) {
    if (typeof Storage === 'undefined') return false;

    const record = {
      value,
      timestamp: Date.now() + (ttl * 1000),
    };

    localStorage.setItem(key, JSON.stringify(record));
    return value;
  },

  load(key) {
    if (typeof Storage === 'undefined') return false;

    try {
      const record = JSON.parse(localStorage.getItem(key));
      if (!record) return false;

      return (Date.now() < record.timestamp && record.value);
    } catch (e) {
      return false;
    }
  },

  remove(key) {
    if (typeof Storage === 'undefined') return false;

    localStorage.removeItem(key);
  },

  saveRecordValue(key, value) {
    if (typeof Storage === 'undefined') return false;

    try {
      const record = JSON.parse(localStorage.getItem(key));
      if (!record) return false;
      const newRecord = {
        value,
        timestamp: record.timestamp,
      };
      localStorage.setItem(key, JSON.stringify(newRecord));
      return value;
    } catch (e) {
      return false;
    }
  },
};
