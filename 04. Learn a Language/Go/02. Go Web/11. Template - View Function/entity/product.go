package entity

type Product struct {
	ID    int
	Name  string
	Price int
	Stock int
}

func (p Product) StockProduct() string {
	var status string
	if p.Stock < 10 {
		status = "Stok hampir habis"
	} else if p.Stock < 20 {
		status = "Stock terbatas"
	}

	return status
}
