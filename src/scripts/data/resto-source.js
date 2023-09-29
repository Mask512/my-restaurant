import API_ENDPOINT from '../global/api-endpoint';

class RestoSource {
  static async getRestoList() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  }

  static async getRestoDetail(id) {
    const response = await fetch(`${API_ENDPOINT.DETAIL}/${id}`);
    return response.json();
  }

  static async postReview(data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(API_ENDPOINT.REVIEW, options);
    return response.json();
  }
}

export default RestoSource;
