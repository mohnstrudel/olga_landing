class BookRequest < Request
  belongs_to :service, optional: true

  validates :name, :phone, :last_name, :accept, :service_id, :date, presence: true

  def self.sti_name
    "BookRequest"
  end
end