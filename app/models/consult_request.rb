class ConsultRequest < Request

  validates :name, :phone, :last_name, :accept, :message, presence: true

  def self.sti_name
    "ConsultRequest"
  end
end