
  export 	async function fetchOrders() {
		const res = await fetch("/api/admin/orders");
		if (!res.ok) throw new Error("Failed to fetch Orders");
		return res.json();
	}