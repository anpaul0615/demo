import {
  Entity, PrimaryColumn, Column,
  Repository, EntityRepository
} from "typeorm";


@Entity()
export class User {
  @PrimaryColumn('varchar', { length:20, nullable:false })
  id: string;

  @Column('varchar', { length:88, nullable:false })
  password: string;

  @Column('varchar', { length:10, nullable:true, default:null })
  name: string;

  @Column('varchar', { length:100, nullable:true, default:null })
  contact: string;

  @Column('varchar', { length:100, nullable:true, default:null })
  address: string;
};


@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByName(name: string) {
    return this.findOne({ name });
  }
};
