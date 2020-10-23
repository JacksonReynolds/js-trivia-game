class ChangeDifficultyFromStringToInteger < ActiveRecord::Migration[6.0]
  def change
    change_column :questions, :difficulty, :integer
  end
end
