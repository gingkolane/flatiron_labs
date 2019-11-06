-- voter = Voter.create

insert into voters (id_voter) values (1)


-- candidate = Candidate.create

-- voter.votes

-- voter.candidates

select * from candidates right join votes where voter_id = voter_Id;

-- vote = Vote.create(voter_id: voter.id, candidate_id: candidate.id)

insert into votes(voter_id: voter.id, candidate_id: candidate.id) values (xx, cc);

-- vote = voter.votes.create(candidate: candidate)

insert into votes (candidate_id, voter_id) values (cc, xx);

-- vote.voter

select * from votes where voter_id = "voter_id";