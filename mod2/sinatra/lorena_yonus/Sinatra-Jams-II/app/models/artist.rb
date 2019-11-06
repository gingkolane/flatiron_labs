class Artist < ActiveRecord::Base
    has_many :joins
    has_many :instruments, through: :joins
end
